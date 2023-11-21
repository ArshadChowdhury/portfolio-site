import {
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const reviewData = [
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

// const reviewData = [
//   {
//     title: "User Experience Research",
//     content:
//       "Embark on a journey of understanding your users with in-depth research methods. Uncover valuable insights into user behavior, preferences, and pain points. Our comprehensive user experience research helps you make informed decisions and create products that resonate with your target audience.",
//   },
//   {
//     title: "User Experience Design",
//     content:
//       "Craft visually stunning and intuitively designed user interfaces that enhance the overall user experience. Our design process focuses on creating seamless interactions, intuitive navigation, and aesthetically pleasing interfaces. Elevate your product's usability and appeal with our user experience design expertise.",
//   },
//   {
//     title: "User Experience Review",
//     content:
//       "Evaluate and refine your existing user experience with a thorough review. Identify areas for improvement, usability enhancements, and design optimizations. Our expert review process ensures that your product aligns with industry best practices and provides a delightful user experience.",
//   },
//   {
//     title: "Website Development",
//     content:
//       "Bring your vision to life with our robust website development services. From front-end to back-end development, we build scalable and high-performance websites tailored to your specific needs. Leverage the latest technologies to ensure a seamless and engaging online presence for your users.",
//   },
//   {
//     title: "Rigorous Testing",
//     content:
//       "Ensure the reliability and functionality of your website through rigorous testing procedures. Our testing methodologies cover everything from functionality and performance to security and compatibility. Identify and address potential issues before they impact your users, guaranteeing a smooth online experience.",
//   },
//   {
//     title: "Ongoing Support",
//     content:
//       "Partner with us for continuous support and maintenance of your digital presence. Our dedicated support team is committed to keeping your website running smoothly, addressing any issues promptly, and implementing updates to ensure optimal performance. Stay worry-free with our reliable ongoing support services.",
//   },
// ];

const PerfectWebsiteGrid = () => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* <div className="flex gap-4">
        <div className="bg-gray-600 p-4 rounded-xl h-fit">
          <MagnifyingGlassIcon className="w-6" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Website Review</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            inventore accusamus tempora deserunt suscipit consequuntur rem autem
            obcaecati rerum deleniti! Nihil.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-gray-600 p-4 rounded-xl h-fit">
          <MagnifyingGlassIcon className="w-6" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Website Review</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            inventore accusamus tempora deserunt suscipit consequuntur rem autem
            obcaecati rerum deleniti! Nihil.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-gray-600 p-4 rounded-xl h-fit">
          <MagnifyingGlassIcon className="w-6" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Website Review</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            inventore accusamus tempora deserunt suscipit consequuntur rem autem
            obcaecati rerum deleniti! Nihil.
          </p>
        </div>
      </div> */}

      {reviewData.map((review, index) => (
        <div key={index} className="flex gap-6">
          <div className="bg-gray-300 dark:bg-gray-600 p-4 rounded-xl h-fit">
            {review.icon}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">{review.title}</h2>
            <p>{review.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerfectWebsiteGrid;
