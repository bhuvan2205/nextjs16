import { prisma } from "@/lib/prisma";
import { Post } from "@/types/posts";
import { revalidateTag, cacheLife, cacheTag } from "next/cache";

const CACHE_TAG = "posts-list";

export const getAllPosts = async () => {
  "use cache";
  cacheLife("hours");
  cacheTag(CACHE_TAG);
  const posts = await prisma.post.findMany();
  return posts;
};

export const createPost = async (post: Post) => {
  const createdPost = await prisma.post.create({
    data: {
      ...post,
    },
  });

  revalidateTag(CACHE_TAG, "max");

  return createdPost;
};

export const getPostById = async (id: number) => {
  const post = await prisma.post.findUnique({
    where: { id },
  });
  return post;
};
