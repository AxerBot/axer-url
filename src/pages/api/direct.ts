import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const map = req.query.map;
  const set = req.query.set;

  if (set) return res.redirect(`osu://s/${set}`);

  res.redirect(`osu://s/${map}`);
}
