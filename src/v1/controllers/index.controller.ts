import { NextFunction, Request, Response } from "express";

export const IndexGet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send("Hey this is for you server!");
  } catch (error) {
    next(error);
  }
};
