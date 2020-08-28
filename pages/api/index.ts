import { NextApiRequest, NextApiResponse } from "next";
import { createModel, createController } from "../../compailer/customCompailer";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST" && req.body["tipe"] === "model") {
      const result = await createModel(req.body.code);
      return res.status(200).send(result);
    }
    if (req.method === "POST" && req.body["tipe"] === "controller") {
      const result = await createController(req.body.code);
      return res.status(200).send(result);
    }
    return res.status(400).end();
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
