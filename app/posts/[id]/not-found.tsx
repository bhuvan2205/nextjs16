// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-zinc-950 py-4">Page or Resource Not Found</h2>
      <p className="text-zinc-900 pb-3">Could not find requested resource.</p>
      <Link href="/" className="text-blue-500 underline">
        Return Home
      </Link>
    </div>
  );
}
