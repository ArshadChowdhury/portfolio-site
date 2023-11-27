import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const servicesData = [
  {
    title: "User Experience Research",
    icon: <MagnifyingGlassIcon className="w-4 lg:w-7" />,
    content:
      "Embark on a journey of understanding your users with in-depth research methods. Uncover valuable insights into user behavior, preferences, and pain points.",
  },
  {
    title: "User Experience Design",
    icon: <PresentationChartLineIcon className="w-4 lg:w-7" />,
    content:
      "Craft visually stunning and intuitively designed user interfaces that enhance the overall user experience. My design process focuses on creating seamless interactions, intuitive navigation, and aesthetically pleasing interfaces.",
  },
  {
    title: "User Experience Review",
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

const ServicesPage = () => (
  <div className="flex flex-col items-center gap-6 mt-20 lg:mb-10">
    <h1 className="mt-10 lg:mt-16 mb-4 lg:mb-10 text-2xl lg:text-4xl font-semibold">
      My Services
    </h1>{" "}
    <div className="mb-32 grid gap-2 lg:gap-4 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="group flex gap-4 rounded-lg border border-transparent px-2 lg:px-4 py-4 lg:py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <div className="bg-gray-300 dark:bg-gray-600 p-4 rounded-xl h-fit">
            {service.icon}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className={`mb-3 text-lg lg:text-2xl font-semibold`}>
              {service.title}
            </h2>
            <p className={`m-0 text-sm lg:text-lg`}>{service.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default ServicesPage;
