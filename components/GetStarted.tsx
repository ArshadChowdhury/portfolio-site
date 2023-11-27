import Link from "next/link";

const GetStarted = () => (
  <section className="flex flex-col gap-4 lg:gap-6 h-[24rem] lg:h-[28rem] justify-end text-center items-center my-10">
    <span className="font-semibold text-base lg:text-2xl">
      Research. Design. Create.
    </span>
    <h1 className="font-semibold text-3xl lg:text-5xl w-full lg:w-1/2">
      I build amazing websites that users love
    </h1>
    <p className="font-semibold text-sm lg:text-xl flex flex-col gap-2">
      Ready for a standout online presence?{" "}
      <span>Explore my portfolio and let&apos;s make it happen together</span>
    </p>
    <Link
      role="link"
      href={"/contact"}
      className="font-bold bg-sky-400 dark:bg-slate-100 px-6 py-2 rounded-md text-black/80 hover:transform hover:scale-[115%]"
    >
      Get Started{" "}
    </Link>
  </section>
);

export default GetStarted;
