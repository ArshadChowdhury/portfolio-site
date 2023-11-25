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
    title: "User Experience Research",
    icon: <MagnifyingGlassIcon className="w-7" />,
    content:
      "Embark on a journey of understanding your users with in-depth research methods. Uncover valuable insights into user behavior, preferences, and pain points.",
  },
  {
    title: "User Experience Design",
    icon: <PresentationChartLineIcon className="w-7" />,
    content:
      "Craft visually stunning and intuitively designed user interfaces that enhance the overall user experience. Our design process focuses on creating seamless interactions, intuitive navigation, and aesthetically pleasing interfaces.",
  },
  {
    title: "User Experience Review",
    icon: <UserGroupIcon className="w-7" />,
    content:
      "Evaluate and refine your existing user experience with a thorough review. Identify areas for improvement, usability enhancements, and design optimizations.",
  },
  {
    title: "Website Development",
    icon: <CodeBracketIcon className="w-7" />,
    content:
      "Bring your vision to life with our robust website development services. From front-end to back-end development, we build scalable and high-performance websites tailored to your specific needs.",
  },
  {
    title: "Rigorous Testing",
    icon: <ShieldCheckIcon className="w-7" />,
    content:
      "Ensure the reliability and functionality of your website through rigorous testing procedures. Our testing methodologies cover everything from functionality and performance to security and compatibility.",
  },
  {
    title: "Ongoing Support",
    icon: <ChatBubbleLeftRightIcon className="w-7" />,
    content:
      "Our dedicated support team is committed to keeping your website running smoothly, addressing any issues promptly, and implementing updates to ensure optimal performance.",
  },
];

type ServicesDataTypes = {
  title: string;
  icon: ReactNode;
  content: string;
};

const EverythingNeeded = () => (
  <section className="flex flex-col gap-16 items-center my-10">
    <h1 className="text-2xl lg:text-4xl text-center font-semibold">
      Our services to expand your business
    </h1>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {servicesData.map((serviceData: ServicesDataTypes, index: number) => (
        <div key={index} className="flex gap-4">
          <div className="bg-gray-300 dark:bg-gray-600 p-4 rounded-xl h-fit">
            {serviceData.icon}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">{serviceData.title}</h2>
            <p>
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
      className="flex items-center gap-4 cursor-pointer learn-more-container group"
    >
      Learn more about our services
      <ArrowLongRightIcon className="w-6 transition-transform transform group-hover:translate-x-1" />
    </Link>
  </section>
);

export default EverythingNeeded;
