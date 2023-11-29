import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";
import { servicesData } from "@/common/servicesData";

type ServicesDataTypes = {
  title: string;
  icon: ReactNode;
  content: string;
};

const EverythingNeeded = () => (
  <section className="flex flex-col gap-4 items-center lg:my-10">
    <h2 className="text-2xl lg:text-4xl text-center my-4 font-semibold">
      My services
    </h2>
    <div className="grid gap-4 lg:gap-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {servicesData.map((serviceData: ServicesDataTypes, index: number) => (
        <div
          key={index}
          className="flex gap-1 lg:gap-4 transition-colors px-0 lg:p-6 rounded-lg hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <div className="bg-gray-300 dark:bg-gray-600 p-4 rounded-xl h-fit">
            {serviceData.icon}
          </div>
          <div className="flex flex-col gap-3 px-2">
            <h3 className="text-sm lg:text-xl font-medium">
              {serviceData.title}
            </h3>
            <p className="text-xs lg:text-base">
              {serviceData.content.length > 100
                ? serviceData.content.slice(0, 100).concat("...")
                : serviceData.content}
            </p>
          </div>
        </div>
      ))}
    </div>
    <Link
      href={"/services"}
      className="flex items-center gap-4 cursor-pointer learn-more-container group text-sm lg:text-lg"
    >
      Learn more about my services
      <ArrowLongRightIcon className="w-6 transition-transform transform group-hover:translate-x-1" />
    </Link>
  </section>
);

export default EverythingNeeded;
