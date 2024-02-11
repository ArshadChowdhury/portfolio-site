import Link from "next/link";
import Image from "next/image";

const linkStyles =
  "px-6 py-2 text-center rounded-md font-semibold text-gray-700 dark:text-gray-200 hover:underline";

const Footer = () => {
  return (
    <footer className="mb-10">
      <div className="flex flex-col md:flex-row justify-around gap-10 mx-8">
        <div className="flex flex-col items-center md:items-start gap-6 w-full lg:flex-1">
          <Link role="link" href="/" className="flex items-center gap-2">
            <Image
              src={"/logo.png"}
              className="rounded-md"
              height={60}
              width={60}
              placeholder="blur"
              blurDataURL={"/logo.png"}
              alt="Logo"
            />
            <div>
              <h3 className="text-lg">Arshad Chowdhury</h3>
              <p className="text-xs">Full Stack Developer</p>
            </div>
          </Link>
          <p className="flex flex-col gap-2 text-center md:text-left text-sm lg:text-base">
            As a dedicated Full Stack Developer, I am passionate about
            transforming concepts into robust digital solutions. With a focus on
            end-to-end development, I specialize in creating seamless,
            user-centric experiences. My proficiency extends across diverse
            programming languages and frameworks, enabling me to customize
            solutions that align with your unique requirements. From inventive
            problem-solving to collaborative project management, I am committed
            to enhancing your digital presence. Let&apos;s work together to
            bring your vision to vibrant life!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 px-6">
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
