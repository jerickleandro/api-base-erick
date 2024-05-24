import { Request, Response } from "express";
import { Base } from "../models/index";

class BaseController {
  constructor() {}

  async testar(req: Request, res: Response) {
    try {
      const teste = await Base.find();
      if (teste) {
        res.status(200).json({ message: "ok" });
      }
      res.status(400).json({ message: "Bad Request" });
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }
}

export default new BaseController();
