import { NextApiRequest, NextApiResponse } from "next";

import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((req, res) => {
    res
      .status(200)
      .json({ success: true, message: "you hit and /api/notes/ route" });
  })
  .post((req, res) => {
    res
      .status(200)
      .json({ success: true, message: "you hit an /api/route post route" });
  });

export default handler;
