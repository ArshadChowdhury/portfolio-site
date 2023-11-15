import Link from "next/link";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

const linkStyles =
  "px-6 py-2 rounded-md font-semibold hover:bg-gray-300 dark:hover:bg-gray-900 hover:transform hover:scale-[115%]";

const NavBar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm dark:bg-slate-900/20 dark:text-gray-50 dark:ring-slate-800/80 px-2 w-full py-4 fixed top-0 left-0 ring-1 ring-slate-300 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.svg"
            className="rounded-full"
            alt="Logo"
            height={50}
            width={50}
          />
          <h1>MD Arshad</h1>
        </Link>
        <div className="hidden lg:flex items-center gap-4">
          <Link className={linkStyles} href={"#"}>
            About
          </Link>
          <Link className={linkStyles} href={"#"}>
            Projects
          </Link>
          <Link className={linkStyles} href={"#"}>
            Services
          </Link>
          <Link className={linkStyles} href={"#"}>
            YouTube
          </Link>
          <Link
            className={
              "px-6 py-2 rounded-md font-semibold text-gray-50 bg-violet-500 dark:bg-violet-700 hover:bg-violet-700 dark:hover:bg-violet-800 hover:transform hover:scale-[105%]"
            }
            href={"#"}
          >
            Contact Me
          </Link>
          <ThemeButton />
        </div>
        <div className="flex gap-4 items-center lg:hidden">
          <ThemeButton />
          <Bars3BottomRightIcon className="w-8" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
