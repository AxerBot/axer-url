import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  // ? eae

  const beatmapId = req.params.id;

  res.redirect(`osu://b/${beatmapId}`);
};
