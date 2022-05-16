import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  const timestamp = req.params.timestamp;

  res.redirect(`osu://edit/${decodeURI(timestamp)}`);
};
