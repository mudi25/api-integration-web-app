import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [tsSourceCode, setTsSourceCode] = React.useState("");
  const [ktSourceCode, setKtSourceCode] = React.useState("");
  const sourceCodeSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files!![0];
      const reader = new FileReader();
      reader.onload = async r => {
        const tsSourceCode = r!!.target!!.result;
        if (typeof tsSourceCode === "string") {
          setTsSourceCode(tsSourceCode);
          return;
        }
        setTsSourceCode("");
        return;
      };
      reader.readAsText(file);
    } catch (error) {
      console.log(error.message);
    }
  };

  const translateToModel = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const data = { tipe: "model", code: tsSourceCode };
      const res = await fetch("api", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const str = await res.text();
      setKtSourceCode(str);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  const translateToController = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const data = { tipe: "controller", code: tsSourceCode };
      const res = await fetch("api", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const str = await res.text();
      setKtSourceCode(str);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Api Integration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="http://localhost:3000">Api Integration</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div>
              <input type="file" accept=".ts" onChange={sourceCodeSelected} />
            </div>
            <div>
              <button onClick={translateToModel}>Model</button>
              <button onClick={translateToController}>Controller</button>
            </div>
            <div>
              <textarea
                rows={10}
                cols={100}
                defaultValue={ktSourceCode}
              ></textarea>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
