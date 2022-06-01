import { NextApiRequest, NextApiResponse } from "next";
import { createBadge } from "../../server/utils/svg";

const hanlder = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { lat, lon, size = "150" },
  } = req;

  const svg = await createBadge(lat as string, lon as string, size as string);

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "no-cache");
  res.status(200).end(svg);
};

export default hanlder;
