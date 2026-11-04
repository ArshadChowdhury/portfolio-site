import Link from "next/link";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import RightSideDrawer from "./RightSideDrawer";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 px-2 py-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-50">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Mohammed Arshad, home">
          <Image
            priority
            src="/logo.png"
            className="h-12 w-auto rounded-md"
            alt=""
            height={434}
            width={533}
          />
          <span>
            <span className="block text-base font-medium lg:text-lg">Mohammed Arshad</span>
            <span className="block text-xs">Full-Stack Engineer</span>
          </span>
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          <NavLinks />
          <Link
            href={"/contact"}
            className="rounded-md bg-sky-600 px-5 py-2 font-semibold text-white transition hover:bg-sky-700"
          >
            Contact Me
          </Link>
          <ThemeButton />
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeButton />
          <RightSideDrawer />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
