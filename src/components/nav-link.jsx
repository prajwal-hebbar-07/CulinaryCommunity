"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? "text-3xl font-bold text-orange-700 underline decoration-1 decoration-orange-500/[.33]"
          : "text-2xl bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-600 hover:text-orange-700 hover:text-3xl hover:transition-all hover:font-bold"
      }
    >
      {children}
    </Link>
  );
}
