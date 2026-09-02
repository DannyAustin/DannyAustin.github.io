"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";

const links = [
  { href: "/", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 print:hidden">
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-6">
        <Link href="/" className="min-w-0 truncate font-semibold tracking-tight">
          {siteConfig.resume.name}
        </Link>
        <div className="flex shrink-0 gap-5 text-sm">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? "font-medium text-accent"
                    : "text-neutral-600 transition-colors hover:text-accent"
                }
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
