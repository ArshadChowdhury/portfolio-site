import Link from "next/link";
import Image from "next/image";
import ThemeButton from "./ThemeButton";
import RightSideDrawer from "./RightSideDrawer";

const linkStyles =
  "px-6 py-2 rounded-md font-semibold hover:bg-gray-300 dark:hover:bg-gray-900 hover:transform hover:scale-[115%]";

const NavBar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm dark:bg-slate-900/20 dark:text-gray-50 dark:ring-slate-800/80 px-2 w-full py-4 fixed top-0 left-0 ring-1 ring-slate-300 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link role="link" href="/" className="flex items-center gap-2">
          <Image
            priority
            src="/logo.png"
            className="rounded-md max-w-full h-auto"
            alt="Logo"
            height={60}
            width={60}
          />
          <div>
            <h3 className="text-base lg:text-lg">Arshad Chowdhury</h3>
            <p className="text-xs">Full Stack Developer</p>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-4">
          <Link role="link" className={linkStyles} href={"/about"}>
            About
          </Link>
          <Link role="link" className={linkStyles} href={"/projects"}>
            Projects
          </Link>
          <Link role="link" className={linkStyles} href={"/services"}>
            Services
          </Link>
          <Link
            target="_blank"
            href={"/Arshad_CV.pdf"}
            role="link"
            className={linkStyles}
          >
            Resume
          </Link>
          <Link
            href={"/contact"}
            role="link"
            className={
              "px-6 py-2 rounded-md font-semibold text-gray-50 bg-violet-500 dark:bg-violet-700 hover:bg-violet-700 dark:hover:bg-violet-800 hover:transform hover:scale-[105%]"
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
