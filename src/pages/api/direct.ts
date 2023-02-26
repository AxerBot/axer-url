import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const map = req.query.map;

  res.redirect(`osu://d/${map}`);
}
