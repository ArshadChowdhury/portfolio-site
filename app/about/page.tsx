import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => (
  <section className="my-20 flex flex-col gap-4 items-center">
    <h1 className="mt-16 mb-10 text-4xl font-semibold">About me</h1>
    <Image
      priority
      className="rounded-md"
      src={"/arshad_pic.jpg"}
      height={300}
      width={300}
      alt="Arshad Image"
    />
    <p>
      I&apos;m Arshad, a seasoned full stack developer. My journey into software
      development, embarked upon nearly two years ago, has been a thrilling
      odyssey. A self-taught enthusiast, I&apos;ve consistently broadened my
      horizons, currently delving into the nuances of C/C++. Already proficient
      in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Nest.js, and
      MongoDB, I constitute a vital component of the MERN stack. Characterized
      by diligence, a relentless thirst for learning, and effective
      communication, I thrive on challenges. With almost 1 year of invaluable
      experience at Repliq, I&apos;ve left an indelible mark on all three of
      their flagship projects, showcasing expertise in Next.js 12/13, axios,
      tanstack query, formik, yup, react-hot-toast, react slick, swiper.js, and
      mobX. While my NDA prevents sharing direct project links here, I&apos;m
      eager to discuss and exhibit these achievements in detail when we talk
      about my experience. My contributions to Repliq involved implementing
      numerous APIs for CRUD operations across projects, coupled with a
      significant overhaul of the codebase for enhanced UI/UX. Open to remote
      work and collaborative opportunities, I bring a dynamic skill set and a
      genuine passion for software development. Stay connected through my GitHub
      accounts:{" "}
      <Link
        className="underline text-sky-500 dark:text-sky-400"
        target="_blank"
        href="https://github.com/ArshadChowdhury"
      >
        arshadchowdhury
      </Link>{" "}
      and{" "}
      <Link
        className="underline text-sky-500 dark:text-sky-400"
        target="_blank"
        href="https://github.com/arshad-repliq"
      >
        arshad-repliq
      </Link>
      , or reach out via email at{" "}
      <Link
        className="underline text-sky-500 dark:text-sky-400"
        href="mailto:arshadchowdhury46@gmail.com"
      >
        arshadchowdhury46@gmail.com
      </Link>{" "}
      . Eager to contribute my skills and stay ahead of the tech curve, I look
      forward to connecting with you and exploring new possibilities!
    </p>
    <p className="flex flex-col gap-4">
      More about me -
      <span>🚀 Tech Alchemist & Problem Solver Extraordinaire</span> Navigating
      the digital frontier, I am a seasoned Full Stack Developer and fervent
      Tech Enthusiast. My forte lies in transforming intricate challenges into
      sleek digital solutions, fueled by an unwavering passion for innovation
      and a knack for resolving complexities in the dynamic tech landscape. I
      also have a full team of full stack developers + UI/UX designers.
      <span>💡 Why Choose Me?</span> ✅ End-to-End Development: I meticulously
      orchestrate the entire development journey, from conceptualization to code
      implementation. This ensures a seamless and efficient process, translating
      ideas into tangible, functional outcomes. <br /> ✅ Tech Agnosticism:
      Proficient in a diverse array of programming languages and frameworks, I
      am adept at tailoring solutions to your distinct needs. This adaptability
      ensures scalability and future-proofing for your projects. <br /> ✅
      User-Centric Design: Beyond writing code, I am dedicated to crafting
      digital experiences that not only meet but exceed user expectations. My
      commitment to user satisfaction is woven into every line, creating
      interfaces that captivate and engage. <br /> ✅ Collaborative Approach:
      More than a developer, I am a partner in your success. I forge strong
      relationships with clients, delving deep into their vision to provide not
      just solutions but a transparent, collaborative journey throughout the
      development process. <br /> ✅ Innovation at Every Step: Embracing the
      latest in technological advancements, I bring a forward-thinking mindset
      to every project, offering not just solutions but opportunities for
      growth. <span>🚶‍♂️ I&apos;ll be a part of your journey</span>
      🌐 Let&apos;s Build Something Extraordinary! Whether you&apos;re launching
      a new project, revamping an existing system, or navigating the digital
      realm for the first time, I&apos;m here to make the process smooth,
      efficient, and exciting. Let&apos;s collaborate to bring your ideas to
      life and elevate your digital presence. <br /> 📬 Connect with me for a
      tech-forward journey!
    </p>
  </section>
);

export default AboutPage;
