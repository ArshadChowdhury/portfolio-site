import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Arshad",
};

const AboutPage = () => (
  <section className="my-20 flex flex-col gap-8 items-center min-h-screen">
    <h1 className="mt-16 mb-10 text-4xl font-semibold">About me</h1>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
      <Image
        priority
        className="rounded-md border border-black dark:border-sky-200"
        src={"/arshad_pic.png"}
        height={400}
        width={400}
        alt="Arshad Image"
      />
      <p className="flex flex-col gap-4">
        I&apos;m Arshad, a seasoned full-stack developer from Bangladesh.
        Specializing in end-to-end website design and development, I prioritize
        user experience and client satisfaction. Let&apos;s connect and explore
        new possibilities!
        <span>
          Over the course of my two-year career as a full stack developer,
          I&apos;ve consistently cultivated a deep passion for enhancing the
          functionality and user experience of websites. This journey has not
          only fueled my technical expertise but also instilled a dedicated
          commitment to ensuring that websites I work on are optimized to their
          fullest potential, catering to the needs of every user.
        </span>
        <span>
          This continuous pursuit of excellence in web development reflects my
          unwavering dedication to creating online spaces that are not only
          visually appealing but also seamlessly accessible and user-friendly
          for a diverse audience.
        </span>
      </p>
    </div>
    <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
      <Image
        className="rounded-md border border-black dark:border-sky-200"
        src={"/arshad_pic_3.png"}
        height={400}
        width={400}
        alt="Arshad Image"
      />
      <div className="flex flex-col items-center gap-4">
        <h4 className="text-center text-2xl">More about me</h4>
        <p className="flex flex-col gap-4">
          My journey into software development started nearly three years ago.
          I&apos;m proficient in HTML, CSS, JavaScript, React.js, Next.js,
          Node.js, Nest.js, Django, WordPress, PostgreSQL, MongoDB and more.
          I&apos;ve been consistently broadening my skillset as well, currently
          learning the nuances of C/C++.
          <span>
            I thrive on challenges. With almost 1 year of invaluable job
            experience at a software firm, I&apos;ve left an indelible mark on
            all three of the company&apos;s flagship projects, showcasing
            expertise in both frontend and backend of those projects.
          </span>{" "}
          <span>
            My contributions to the company involved implementing tons of
            features across projects, coupled with a significant overhaul of the
            codebase for enhanced UI/UX. I bring a genuine passion for software
            development. I&apos;ve contributed and still contributing to open
            source projects. Here&apos;s my GitHub account:{" "}
            <Link
              className="underline text-[#3081d0] dark:text-sky-400"
              target="_blank"
              href="https://github.com/ArshadChowdhury"
            >
              arshadchowdhury
            </Link>{" "}
            <br /> If you decide to hire me I&apos;d be able to do all these
            amazing things for you 😊
          </span>
          <Link
            href={"/services"}
            className="flex items-center self-center my-4 gap-4 cursor-pointer learn-more-container-about group text-sm lg:text-lg text-[#3081d0] w-fit"
          >
            Learn about my services
            <ArrowLongRightIcon className="w-6 transition-transform transform group-hover:translate-x-1" />
          </Link>
        </p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
      <Image
        className="rounded-md border border-black dark:border-sky-200 pl-4"
        src={"/arshad_pic_2.png"}
        height={400}
        width={400}
        alt="Arshad Image"
      />
      <div className="flex flex-col items-center gap-4">
        <h4 className="text-center text-2xl">About my projects</h4>
        <p className="flex flex-col gap-4">
          In the course of my career, I&apos;ve had the privilege of
          contributing to three significant large-scale projects, the details of
          which, unfortunately, are bound by non-disclosure agreements. While I
          can&apos;t showcase those specific projects, the websites I&apos;m
          able to share below are a testament to my skills and capabilities.
          <span>
            Each project posed its unique challenges, but my proficiency in
            problem-solving has consistently proven effective. I take pride in
            overcoming obstacles, ensuring that no errors impede the successful
            completion of my projects. Feel free to explore the showcased
            websites, which reflect both my technical expertise and commitment
            to delivering exceptional results.
          </span>{" "}
          <Link
            href={"/projects"}
            className="flex items-center self-center my-4 gap-4 cursor-pointer learn-more-container-about group text-sm lg:text-lg text-[#3081d0] w-fit"
          >
            Learn about my projects
            <ArrowLongRightIcon className="w-6 transition-transform transform group-hover:translate-x-1" />
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default AboutPage;
