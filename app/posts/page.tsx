import { getAllPosts } from "@/db/posts";
import Link from "next/link";

const PostsListPage = async () => {
  const posts = await getAllPosts();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
          Posts
        </h1>
      </section>
      <ul className="space-y-3 text-center">
        {posts?.slice(0, 5)?.map((post) => (
          <li key={post?.id}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={`posts/${post.id}`}
                className="text-lg font-semibold text-zinc-950 hover:text-blue-500"
              >
                {post?.title?.charAt(0)?.toUpperCase() + post?.title?.slice(1)}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsListPage;
