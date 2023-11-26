import React from "react";
import Image from "next/image";
import Link from "next/link";

const projectsInfo = [
  {
    imageSrc: "/project_1.png",
    projectHeading: "My Dubai Properties",
    projectDetails:
      "My Dubai Properties is a sophisticated real estate platform meticulously crafted for seamless property transactions in the vibrant city of Dubai. Developed by a dedicated client, the website offers an extensive array of properties including apartments, villas, duplexes, and more. Its user-centric design ensures a delightful experience, enhanced by the integration of an intuitive map feature for effortless property location. The cutting-edge technology stack comprises Next.js for the frontend and Express for the backend, providing a robust foundation for a secure and efficient real estate marketplace.",
    liveLink: "https://my-dubaiproperties.com/",
    github: "#",
  },
  {
    imageSrc: "/project_2.png",
    projectHeading: "Youbie Token",
    projectDetails:
      "Presenting Youbie.tv, the game-changing, crypto-powered streaming platform I developed for a visionary client in the heart of innovation, Dubai. This DAO-operated 5-in-1 platform offers streamers unprecedented revenue streams, from NFT sales to gaming tournaments. With a user-friendly design, creators can start streaming, mint NFTs, and sell products within minutes. Youbie.tv accepts over 5 cryptocurrencies for seamless transactions, making it a revolutionary all-in-one solution for content creators.",
    liveLink: "https://youbie-token.vercel.app/",
    github: "#",
  },
  {
    imageSrc: "/project_3.png",
    projectHeading: "E-bazaar",
    projectDetails:
      "Introducing E-bazaar, an innovative e-commerce frontend project I've developed. This user-friendly platform allows seamless addition of new products, efficient product search and navigation, cart management including item addition, quantity updates, and deletions. Notably, the use of MongoDB ensures persistent storage of the cart and all products, offering a seamless experience even after page reloads. The project boasts full responsiveness across devices and features intuitive modals and side drawers for convenient product management and cart viewing. With added functionalities such as discount start and end dates, E-bazaar is designed to enhance the overall e-commerce experience.",
    liveLink: "https://e-bazaar-by-arshad.netlify.app/",
    github: "https://github.com/ArshadChowdhury/e-bazaar-frontend",
  },

  {
    imageSrc: "/project_5.png",
    projectHeading: "Daraz clone",
    projectDetails:
      "The Daraz Clone project serves as a valuable hands-on exercise to enhance my skills in React and gain practical insights into the functionalities of e-commerce websites. Through features such as cart management, add to cart, delete from cart, checkout, and user authentication pages like login and signup, this project provides a comprehensive understanding of the mechanics behind e-commerce platforms. It stands as a significant step in my learning journey, allowing me to apply React concepts and grasp the intricacies of user interactions within an e-commerce context",
    liveLink: "https://react-daraz-clone.netlify.app/",
    github: "https://github.com/ArshadChowdhury/react-eCommerce-app-interview",
  },
  {
    imageSrc: "/project_4.png",
    projectHeading: "Shop clone",
    projectDetails:
      "Shop Clone represents my inaugural foray into Next.js and Tailwind for an e-commerce project. Leveraging Next.js routing, and incorporating essential elements like Link and Image, this project marks a significant leap in my understanding of these technologies. Despite my initial limited knowledge of Next.js and Tailwind, the Shop Clone is a testament to my ability to quickly grasp and implement these tools for a seamless and responsive e-commerce experience.",
    liveLink: "https://nextjs-ecommercebyarshad.netlify.app/",
    github: "https://github.com/ArshadChowdhury/e-commerce-demo-app",
  },
  {
    imageSrc: "/project_6.png",
    projectHeading: "CSV Parser app",
    projectDetails:
      "The CSV Parser App is a specialized tool designed for parsing CSV files containing XYZ values. This app efficiently reads the file, identifies the maximum and minimum XYZ values, and visually represents the maximum X value on a graph. Additionally, users can download the parsed results in a convenient PDF format. This application streamlines the process of extracting and visualizing key data points from CSV files, offering a user-friendly solution for data analysis and visualization.",
    liveLink: "https://xyz-petroleum.netlify.app/",
    github: "https://github.com/ArshadChowdhury/csv-parser-app",
  },
  {
    imageSrc: "/project_7.png",
    projectHeading: "Image Gallery app",
    projectDetails:
      "The Image Gallery App is a visually appealing solution crafted for efficient image management. Developed with React and Vite, this application allows users to sort and delete multiple images seamlessly. Moreover, it features the capability to add an image for preview, enhancing the overall user experience. The deployment on Netlify ensures accessibility and convenience, making it a versatile and user-friendly image gallery solution.",
    liveLink: "https://image-gallery-by-arshad.netlify.app/",
    github: "https://github.com/ArshadChowdhury/image-gallery",
  },
];

const ProjectsPage = () => (
  <div className="flex flex-col items-center gap-6 my-20">
    <h1 className="mt-16 mb-10 text-4xl font-semibold">My Projects</h1>
    {projectsInfo.map((project, index) => (
      <div key={index} className="flex flex-col md:flex-row w-full">
        {" "}
        <div className="w-full md:w-1/2">
          <Image
            priority
            src={project.imageSrc}
            className="w-full h-full rounded-md border border-gray-300 dark:border-gray-500 shadow-lg"
            height="650"
            width="650"
            alt="Project_image"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="mx-2 md:mx-6 my-4 md:my-0 flex flex-col gap-4">
            <h4 className="text-2xl">{project.projectHeading}</h4>
            <p className="text-sm md:text-base">{project.projectDetails}</p>
            <div className="flex gap-4 underline text-sky-500">
              {project.github.length > 1 ? (
                <Link target="_blank" href={project?.github}>
                  Github
                </Link>
              ) : null}
              <Link target="_blank" href={project?.liveLink}>
                Live Link
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectsPage;
