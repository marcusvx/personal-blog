import type { NextApiRequest, NextApiResponse } from "next";
import { BlogPost } from "../../models/blog-post";
import prisma from "../../lib/prisma";

type ResponseData = {
  posts: BlogPost[];
};
export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const posts: BlogPost[] = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  res.status(200).json({ posts });
};
