import { POSTS_API_URL } from "@/data/posts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

const PostDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const response = await fetch(`${POSTS_API_URL}/${id}`);

  if (!response.ok) return notFound();

  const post = await response.json();
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-zinc-950 sm:text-4xl">
          {post?.title}
        </h1>
      </section>
      <div className="text-zinc-900">{post?.body}</div>
    </div>
  );
};

export default PostDetailPage;
