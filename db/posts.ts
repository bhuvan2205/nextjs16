import { prisma } from "@/lib/prisma";
import { Post } from "@/types/posts";

export const getAllPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

export const createPost = async (post: Post) => {
  const createdPost = await prisma.post.create({
    data: {
      ...post,
    },
  });

  return createdPost;
};

export const getPostById = async (id: number) => {
  const post = await prisma.post.findUnique({
    where: { id },
  });
  return post;
};
