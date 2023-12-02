import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";
import {
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const servicesData = [
  {
    title: "UI / UX Research",
    icon: <MagnifyingGlassIcon className="w-4 lg:w-7" />,
    content:
      "We start by thoroughly researching users and their needs with clients, aiming to understand behaviors, preferences, and pain points. This user experience (UX) research is crucial for creating products centered around users. I define research goals, create user personas, and conduct interviews to explore motivations and challenges. Analyzing existing data adds context. Usability testing helps evaluate the user experience, guiding design improvements. Team collaboration is key, ensuring smooth coordination between designers and developers. Maintaining an ongoing feedback loop with users throughout development ensures continuous improvements and aligns the final product with user expectations.",
  },
  {
    title: "UI / UX Design",
    icon: <PresentationChartLineIcon className="w-4 lg:w-7" />,
    content:
      "After conducting thorough research, my design process revolves around crafting visually stunning and intuitively designed user interfaces. Emphasizing seamless interactions, user-friendly navigation, and aesthetic elements, I am committed to ensuring the end product not only meets but exceeds user expectations. This meticulous approach blends functionality with visual appeal, ultimately fostering a positive and engaging user experience.",
  },
  {
    title: "UI / UX Review",
    icon: <UserGroupIcon className="w-4 lg:w-7" />,
    content:
      "After the initial design phase, we conduct a thorough review involving both internal teams and clients to identify necessary changes. This review process is crucial for evaluating the current user experience, pinpointing areas for improvement, usability enhancements, and design optimizations. By closely analyzing user interactions and feedback, our goal is to streamline the user journey and identify and address any pain points. This comprehensive review serves as a foundation for refining the overall user experience, ensuring that the final product seamlessly aligns with user expectations. We continuously seek opportunities to enhance usability and design elements based on the insights gathered during this collaborative evaluation process.",
  },
  {
    title: "Website Development",
    icon: <CodeBracketIcon className="w-4 lg:w-7" />,
    content:
      "Next comes the actual development of the site, and this is where we excel the most. We bring your vision to life through our robust website development services, covering both front-end and back-end development. Our focus is on crafting scalable and high-performance websites tailored to your specific needs. This involves creating visually appealing and user-friendly interfaces on the front end, ensuring robust functionality, security, and optimal performance on the back end. Whether you're launching a new website or enhancing an existing one, our services are designed to deliver a seamless and engaging online experience, aligning with your unique goals and requirements.",
  },
  {
    title: "Rigorous Testing",
    icon: <ShieldCheckIcon className="w-4 lg:w-7" />,
    content:
      "Although we integrate testing during the coding phase, we allocate additional time for rigorous testing to ensure the reliability and functionality of your website. Our testing methodologies cover everything from functionality and performance to security and compatibility. This commitment to thorough examination aims to identify and address any potential issues, guaranteeing a seamless user experience. Our dedication to rigorous testing not only enhances the overall quality of your website but also fortifies its resilience, ensuring optimal performance across various devices and platforms.",
  },
  {
    title: "Ongoing Support",
    icon: <ChatBubbleLeftRightIcon className="w-4 lg:w-7" />,
    content:
      "After we've completed building the site, we extend continuous support and maintenance for a period, free of charge. Our dedicated support team is committed to ensuring your website runs smoothly, promptly addressing any issues and implementing updates for optimal performance. This ongoing support guarantees peace of mind, knowing that your website is consistently monitored, maintained, and ready to adapt to the evolving needs of your users. Our commitment to excellence shines through troubleshooting, updates, and general assistance, reflecting our dedication to the sustained success of your website.",
  },
];

type ServicesDataTypes = {
  title: string;
  icon: ReactNode;
  content: string;
};

const EverythingNeeded = () => (
  <section className="flex flex-col gap-8 items-center lg:my-10">
    <h2 className="text-2xl lg:text-4xl text-center my-4 font-semibold">
      My services
    </h2>
    <div className="grid gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
              {serviceData.content.length > 90
                ? serviceData.content.slice(0, 90).concat("...")
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
