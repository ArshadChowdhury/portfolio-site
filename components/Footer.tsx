import React from "react";
import Link from "next/link";
import Image from "next/image";

const linkStyles =
  "px-6 py-2 text-center rounded-md font-semibold text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300";

const Footer = () => (
  <footer className="mb-10">
    <div className="flex justify-around gap-4">
      <div className="mx-4 flex flex-col gap-6 w-1/2">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.svg"
            className="rounded-full"
            alt="Logo"
            height={50}
            width={50}
          />
          <h3>Arshad Chowdhury</h3>
        </Link>
        <p className="flex flex-col gap-2 px-1">
          <span>Arshad - Full Stack Developer & Tech Enthusiast </span>I am a
          passionate Full Stack Developer with a relentless commitment to
          turning ideas into powerful digital solutions. Specializing in
          end-to-end development, I thrive on crafting seamless, user-centric
          experiences. My expertise spans a range of programming languages and
          frameworks, allowing me to tailor solutions to your unique needs. From
          innovative problem-solving to collaborative project management, I am
          dedicated to elevating your digital presence. Let&apos;s bring your
          vision to life!
        </p>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <Link className={linkStyles} href={"/about"}>
          About
        </Link>
        <Link className={linkStyles} href={"/projects"}>
          Projects
        </Link>
        <Link className={linkStyles} href={"/services"}>
          Services
        </Link>
        <Link className={linkStyles} href={"/youtube"}>
          YouTube
        </Link>
        <Link className={linkStyles} href={"/contact"}>
          Contact Me
        </Link>
      </div>
    </div>
    <hr className="w-full border-gray-400 my-6" />
    <p className="text-center">&copy; Arshad Chowdhury - All rights reserved</p>
  </footer>
);

export default Footer;
