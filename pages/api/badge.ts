import { NextApiRequest, NextApiResponse } from "next";
import { createBadge } from "../../server/utils/svg";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { lat, lon, size = "150" },
  } = req;

  const svg = await createBadge(lat as string, lon as string, size as string);

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).end(svg);
};
