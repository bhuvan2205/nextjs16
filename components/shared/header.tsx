import { NAV_LINKS } from "@/data/route";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b border-zinc-200 py-8 px-4 sm:px-6">
      <Link href="/" className="flex items-center gap-3 font-semibold">
        <Image src="/next.svg" alt="Logo" width={90} height={18} priority />
      </Link>
      <nav className="flex items-center gap-4 text-sm text-zinc-600 font-medium">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.route}
            href={link.href}
            className="hover:text-zinc-950"
          >
            {link.route}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
