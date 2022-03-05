import type { NextApiRequest, NextApiResponse } from "next";
import { BlogPost } from "../../models/blog-post";
import prisma from "../../lib/prisma";

const DEFAULT_LIMIT = 10;
type ResponseData = {
  posts: BlogPost[];
};
export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const { query } = req;
  const take = Number(query?.take || DEFAULT_LIMIT);
  const skip = Number(query?.skip || 0);

  const result = await prisma.post.findMany({
    skip,
    take,
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
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });

  const posts: BlogPost[] = result.map((post) => {
    return { ...post, tags: post.tags.map((tag) => tag.tag) };
  });

  res.status(200).json({ posts });
};
