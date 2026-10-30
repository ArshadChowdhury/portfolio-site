"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/Mohammed_Arshad_Resume.pdf", external: true },
] as const;

const linkStyles =
  "block rounded-md px-5 py-2 font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-sky-800 aria-[current=page]:text-sky-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-300 dark:aria-[current=page]:text-sky-300";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
      {navLinks.map(({ label, href, ...rest }) => {
        const external = "external" in rest && rest.external;
        return (
          <li key={href}>
            <Link
              className={linkStyles}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
