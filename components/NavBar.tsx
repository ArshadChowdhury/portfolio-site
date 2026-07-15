import Link from "next/link";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import RightSideDrawer from "./RightSideDrawer";

const linkStyles =
  "px-5 py-2 rounded-md font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-sky-800 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-300";

const NavBar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 px-2 py-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            priority
            src="/logo.png"
            className="h-12 w-auto rounded-md"
            alt="Logo"
            height={434}
            width={533}
          />
          <div>
            <span className="block text-base font-medium lg:text-lg">
              Arshad Chowdhury
            </span>
            <span className="block text-xs">AI MVP Developer</span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-4">
          <Link className={linkStyles} href={"/about"}>
            About
          </Link>
          <Link className={linkStyles} href={"/projects"}>
            Projects
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/Arshad_Resume.pdf"}
            className={linkStyles}
          >
            Resume
          </Link>
          <Link className={linkStyles} href={"/services"}>
            Services
          </Link>
          <Link
            href={"/contact"}
            className={
              "rounded-md bg-sky-600 px-5 py-2 font-semibold text-white transition hover:bg-sky-700"
            }
          >
            Contact Me
          </Link>
          <ThemeButton />
        </div>
        <div className="flex gap-4 items-center lg:hidden">
          <ThemeButton />
          <RightSideDrawer />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
