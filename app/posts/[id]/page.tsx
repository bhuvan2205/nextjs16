import { getPostById } from "@/db/posts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

const PostDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const post = await getPostById(parseInt(id));

  if (!post) return notFound();

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
