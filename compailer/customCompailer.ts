import { Project, SyntaxKind, Decorator } from "ts-morph";
import { TsKeyword } from "./tsType";
import * as brain from "brain.js";
import { KtKeyword } from "./ktType";

interface IControllerParameter {
  name: string;
  decorator: string;
  type: string;
}

export async function createModel(sourceCode: string): Promise<string> {
  try {
    const net = new brain.recurrent.LSTM();
    const jsonNet = await import("./net.json");
    net.fromJSON(JSON.parse(JSON.stringify(jsonNet)));

    const project = new Project({
      // tsConfigFilePath: join(__dirname, "..", "tsconfig.json")
    });
    const source = project.createSourceFile("./tmp/tmp.ts", sourceCode);
    const translate = (text: string): string => {
      const value = TsKeyword.find(v => v.value === text);
      if (value === undefined) {
        return text;
      }
      const ktKey = net.run(value.key);
      const ktValue = KtKeyword.find(v => v.key === ktKey);
      if (ktValue) {
        return ktValue.value;
      }
      return ktKey;
    };

    const interfaces = source.getChildrenOfKind(
      SyntaxKind.InterfaceDeclaration
    )[0];
    const property = interfaces
      .getProperties()
      .map(
        (it): string =>
          `val ${it.getName()}: ${translate(
            it
              .getText()
              .replace(it.getName() + ":", "")
              .replace(";", "")
              .trim()
          )}`
      )
      .join(",\n");
    const sourceCodeKt: string = "";
    return sourceCodeKt.concat(
      translate("interface"),
      " ",
      interfaces.getName(),
      "(\n",
      property,
      "\n)"
    );
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
export async function createController(sourceCode: string): Promise<string> {
  try {
    const net = new brain.recurrent.LSTM();
    const jsonNet = await import("./net.json");
    net.fromJSON(JSON.parse(JSON.stringify(jsonNet)));

    const project = new Project({
      // tsConfigFilePath: join(__dirname, "..", "tsconfig.json")
    });
    const source = project.createSourceFile("./tmp/tmp.ts", sourceCode);
    const getControllerPath = (dec: Decorator[]): string => {
      if (dec.length > 0) {
        const decorator = dec[0];
        const path =
          decorator.getArguments().length > 0
            ? decorator.getArguments()[0].getText()
            : "";
        const mPath = path
          .split("/")
          .map(it => {
            if (it.startsWith(":")) {
              return "{" + it.slice(1) + "}";
            }
            return it;
          })
          .join("/");
        return mPath;
      }
      return "";
    };
    const getMethodPath = (
      controllerPath: string,
      dec: Decorator[]
    ): string => {
      if (dec.length > 0) {
        const decorator = dec[0];
        const path =
          decorator.getArguments().length > 0
            ? decorator.getArguments()[0].getText()
            : "";
        const xPath =
          controllerPath === "" ? path : controllerPath + "/" + path;
        const mPath = xPath
          .split("/")
          .map(it => {
            if (it.startsWith(":")) {
              return "{" + it.slice(1) + "}";
            }
            return it;
          })
          .join("/");
        return mPath;
      }
      return controllerPath;
    };
    const translate = (text: string): string => {
      const value = TsKeyword.find(v => v.value === text);
      if (value === undefined) {
        return text;
      }
      const ktKey = net.run(value.key);
      const ktValue = KtKeyword.find(v => v.key === ktKey);
      if (ktValue) {
        return ktValue.value;
      }
      return ktKey;
    };

    const controller = source.getChildrenOfKind(SyntaxKind.ClassDeclaration)[0];
    const controllerPath = getControllerPath(controller.getDecorators());
    const mainController =
      translate("class") + " " + controller.getName() || "" + " ";

    const controllerMethod: string[] = [];
    controller.getMethods().forEach(child => {
      const parameter = child
        .getParameters()
        .filter(it => it.getDecorator("Body"))
        .map(
          (it): IControllerParameter => ({
            decorator: "Body",
            name: it.getName(),
            type: it
              .getText()
              .replace("@Body()", "")
              .replace(it.getName() + ":", "")
              .replace(";", "")
              .trim()
          })
        )
        .map(
          it =>
            "@" +
            translate(it.decorator) +
            "()" +
            it.name +
            ": " +
            translate(it.type)
        )
        .join(",");

      const method =
        "\n@" +
        translate(child.getDecorators()[0].getName()) +
        `("${getMethodPath(controllerPath, child.getDecorators()).replace(
          /'/g,
          ""
        )}")\n` +
        "fun " +
        child.getName() +
        "(" +
        parameter +
        ")" +
        ": " +
        translate(child.getReturnType().getText(child));
      controllerMethod.push(method);
    });
    return mainController + "{\n" + controllerMethod.join("\n") + "\n}";
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
