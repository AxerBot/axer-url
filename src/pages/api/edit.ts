import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const time = req.query.time;

  res.redirect(`osu://edit/${time}`);
}
