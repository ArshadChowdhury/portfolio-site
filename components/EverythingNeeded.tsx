import {
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

const servicesData = [
  {
    title: "UI / UX Research",
    icon: <MagnifyingGlassIcon className="w-4 lg:w-7" />,
    content:
      "Embark on a journey of understanding your users with in-depth research methods. Uncover valuable insights into user behavior, preferences, and pain points.",
  },
  {
    title: "UI / UX Design",
    icon: <PresentationChartLineIcon className="w-4 lg:w-7" />,
    content:
      "Craft visually stunning and intuitively designed user interfaces that enhance the overall user experience. My design process focuses on creating seamless interactions, intuitive navigation, and aesthetically pleasing interfaces.",
  },
  {
    title: "UI / UX Review",
    icon: <UserGroupIcon className="w-4 lg:w-7" />,
    content:
      "Evaluate and refine your existing user experience with a thorough review. Identify areas for improvement, usability enhancements, and design optimizations.",
  },
  {
    title: "Website Development",
    icon: <CodeBracketIcon className="w-4 lg:w-7" />,
    content:
      "Bring your vision to life with my robust website development services. From front-end to back-end development, we build scalable and high-performance websites tailored to your specific needs.",
  },
  {
    title: "Rigorous Testing",
    icon: <ShieldCheckIcon className="w-4 lg:w-7" />,
    content:
      "Ensure the reliability and functionality of your website through rigorous testing procedures. My testing methodologies cover everything from functionality and performance to security and compatibility.",
  },
  {
    title: "Ongoing Support",
    icon: <ChatBubbleLeftRightIcon className="w-4 lg:w-7" />,
    content:
      "My dedicated support team is committed to keeping your website running smoothly, addressing any issues promptly, and implementing updates to ensure optimal performance.",
  },
];

type ServicesDataTypes = {
  title: string;
  icon: ReactNode;
  content: string;
};

const EverythingNeeded = () => (
  <section className="flex flex-col gap-8 lg:gap-16 items-center lg:my-10">
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
              {serviceData.content.length > 80
                ? serviceData.content.slice(0, 80).concat("...")
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
