import { createPost } from "@/db/posts";
import { redirect } from "next/navigation";

const CreatePostPage = () => {
  const createPostAction = async (formData: FormData) => {
    "use server";
    const title = String(formData.get("title"))?.trim() || "";
    const content = String(formData.get("content"))?.trim() || "";

    await createPost({
      title,
      body: content,
    });
    redirect("/");
  };
  return (
    <section className="space-y-4">
      <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
        Create Post
      </h1>
      <form
        className="space-y-4 max-w-md mx-auto mt-10"
        action={createPostAction}
      >
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-zinc-950"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-950"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-zinc-950"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-950"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </section>
  );
};

export default CreatePostPage;
