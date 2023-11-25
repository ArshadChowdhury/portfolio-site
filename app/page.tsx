import Image from "next/image";
import ThemeButton from "@/components/ThemeButton";
import GetStarted from "@/components/GetStarted";
import Link from "next/link";
import HomePageSlider from "@/components/HomePageSlider";
import {
  ArrowLongRightIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/20/solid";
import RandomAdvice from "@/components/RandomAdvice";
import ContactMe from "@/components/ContactMe";
import EverythingNeeded from "@/components/EverythingNeeded";

const data = [
  {
    id: 1,
    name: "Mohammad Al-Amin",
    title: "Senior Developer",
    img: "/nirob_vai.jpg",
    icon: "/twitter.png",
    href: "https://twitter.com/0xweathered",
    desc: "Arshad always had perseverance in the face of obstacles, he went above & beyond to solve any problem that was presented to him. He loves technology. He's friendly & easy to work with. I've known him for years, he's very reliable & trustworthy person. He'd be a great asset to any company he works for. ",
  },
  {
    id: 2,
    name: "Joshua Fluke",
    title: "CEO at Grind Reel",
    img: "/jshua.jpg",
    icon: "/youtube.svg",
    href: "https://www.youtube.com/c/JoshuaFluke1",
    desc: "Arshad is a fast learner with great communication skills, he's tech-savvy & have worked on several small projects and shown great potential at Grind Reel. He's still a valuable member of Grind Reel community, He has a great understanding of the front-end technologies & great research capabilities. He's also very reliable, you can always expect him to get the job done in time. ",
    featured: true,
  },
  {
    id: 3,
    name: "Iftekhar Ahmed",
    title: "Data Scientist",
    img: "/iftekhar.jpg",
    href: "https://www.linkedin.com/in/ahmed-iftekhar/",
    icon: "/linkedin.png",
    desc: "Arshad has been collaborating with me & big communities for quite some time now, which has made him intimately familiar with all the stages of the web lifecycle from the initial architecture to final deployment, he's highly recommended for all kind of web projects.",
  },
];

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    // <h1>Hey</h1>

    <main className="flex flex-col gap-8">
      <section>
        <GetStarted />
        <HomePageSlider />
      </section>
      <EverythingNeeded />
      <section className="flex flex-col items-center lg:w-3/4 w-full mx-4 lg:mx-auto gap-8">
        <h1 className="text-xl lg:text-4xl text-center font-semibold py-4">
          Testimonials{" "}
        </h1>
        <div className="grid grid-flow-row-dense gap-14">
          {data.map((data, i) => (
            <div
              className={`${
                data.featured
                  ? "scale-105 hover:scale-[115%]"
                  : "hover:scale-110"
              } bg-gray-600 rounded-lg p-6 transition-all duration-500`}
              key={i}
            >
              <div className="flex justify-center items-center gap-4">
                <ArrowUturnRightIcon className="w-8" />
                <Image
                  height={60}
                  width={60}
                  className="rounded-full"
                  src={data.img}
                  alt="Testimonial_Person"
                />
                <Link href={data.href} target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    height={40}
                    width={40}
                    className="rounded-sm"
                    src={data.icon}
                    alt="icon"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center gap-4 pt-6 text-lg text-center">
                {data.desc}
                <div className="flex flex-col gap-1 items-center">
                  <h3>{data.name}</h3>
                  <h4>{data.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <RandomAdvice />
      <ContactMe />

      <section>Hello World</section>
    </main>
  );
}
