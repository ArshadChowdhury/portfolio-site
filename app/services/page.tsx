import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { servicesData } from "@/common/servicesData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const ServicesPage = () => (
  <section className="my-20 flex flex-col gap-8 items-center min-h-screen">
    <h1 className="mt-10 lg:mt-16 mb-4 lg:mb-10 text-2xl lg:text-4xl font-semibold">
      My Services
    </h1>{" "}
    <div className="mb-32 grid gap-2 lg:gap-4 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="group flex gap-2 lg:gap-4 rounded-lg border border-transparent lg:px-4 py-4 lg:py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <div className="bg-gray-300 dark:bg-gray-600 p-4 rounded-xl h-fit">
            {service.icon}
          </div>
          <div className="flex flex-col lg:gap-4">
            <h2 className={`mb-3 text-lg lg:text-2xl font-semibold`}>
              {service.title}
            </h2>
            <p className={`m-0 text-sm lg:text-lg`}>{service.content}</p>
          </div>
        </div>
      ))}
    </div>
    <Link
      href={"/contact"}
      className="flex items-center self-center my-4 gap-4 cursor-pointer learn-more-container-about group text-sm lg:text-lg text-[#3081d0] w-fit"
    >
      Start from any of these stages
      <ArrowLongRightIcon className="w-6 transition-transform transform group-hover:translate-x-1" />
    </Link>
  </section>
);

export default ServicesPage;
