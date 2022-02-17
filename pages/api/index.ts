import { NextApiRequest, NextApiResponse } from "next";

import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((req, res) => {
    res
      .status(200)
      .json({ success: true, message: "get path working successfully" });
  })
  .post((req, res) => {
    res
      .status(200)
      .json({ success: true, message: "post path working successfully" });
  });

export default handler;
