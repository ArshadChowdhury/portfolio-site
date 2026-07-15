import Link from "next/link";
import Image from "next/image";

const linkStyles =
  "px-6 py-2 text-center rounded-md font-semibold text-gray-700 dark:text-gray-200 hover:underline";

const Footer = () => {
  return (
    <footer className="mx-auto mb-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-around gap-10 md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start gap-6 w-full lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={"/logo.png"}
              className="h-12 w-auto rounded-md"
              height={434}
              width={533}
              alt="Logo"
            />
            <div>
              <span className="block text-lg font-medium">Arshad Chowdhury</span>
              <span className="block text-xs">AI MVP Developer</span>
            </div>
          </Link>
          <p className="flex flex-col gap-2 text-center text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-left lg:text-base">
            I help founders and businesses worldwide build AI MVPs, SaaS
            products and full-stack web applications. I can work independently
            or coordinate a small team of specialists when the project needs
            more delivery capacity.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-col justify-center items-center gap-4 px-6">
          <Link className={linkStyles} href={"/"}>
            Home
          </Link>
          <Link className={linkStyles} href={"/about"}>
            About
          </Link>
          <Link className={linkStyles} href={"/projects"}>
            Projects
          </Link>
          <Link className={linkStyles} href={"/services"}>
            Services
          </Link>
          {/* <Link className={linkStyles} href={"/youtube"}>
            YouTube
          </Link> */}
          <Link className={linkStyles} href={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
      <hr className="w-full border-gray-400 my-6" />
      <p className="text-center">
        &copy; Arshad Chowdhury - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
