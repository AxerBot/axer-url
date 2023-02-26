import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const map = req.query.map;
  const set = req.query.set;

  if (set) return res.redirect(`osu://dl/${set}`);

  res.redirect(`osu://b/${map}`);
}
