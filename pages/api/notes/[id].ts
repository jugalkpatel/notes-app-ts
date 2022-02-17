import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((req, res) => {
    const { id } = req.query;

    res
      .status(200)
      .json({ success: true, message: `get ${id} note path working` });
  })
  .patch((req, res) => {
    const { id } = req.query;

    res
      .status(200)
      .json({ success: true, message: `update ${id} note path is working` });
  })
  .delete((req, res) => {
    const { id } = req.query;

    res
      .status(200)
      .json({ sucecss: true, message: `delete ${id} note path is working` });
  });

export default handler;
