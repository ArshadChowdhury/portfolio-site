"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const imageSourcesDesktop = [
  "/project_1.png",
  "/project_2.png",
  "/project_5.png",
  "/project_4.png",
];

const imageSourcesMobile = [
  "/project_1_mb.png",
  "/project_2_mb.png",
  "/project_5_mb.png",
  "/project_4_mb.png",
];

const HomePageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsImageChanging(true);
      // Change the image source every 5 seconds
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imageSourcesDesktop.length
      );
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <>
      <section className="w-full mb-20">
        <div className="relative">
          <Image
            priority
            src={"/mac_frame.png"}
            height={400}
            width={1280}
            className="hidden md:block"
            alt="macbook-frame"
          />
          <Image
            src={imageSourcesDesktop[currentImageIndex]}
            height={700}
            width={1044}
            className={`hidden md:block rounded-md absolute top-[4%] left-[10.5%] w-[79%] h-[88%] ${
              isImageChanging ? "fade-enter" : "fade-enter-active"
            }`}
            onLoad={() => setIsImageChanging(false)}
            placeholder="blur"
            blurDataURL={imageSourcesDesktop[0]}
            alt="macbook-xl-image"
          />

          <Image
            priority
            src={"/iphone_frame.png"}
            height={400}
            width={744}
            className="w-full md:w-[27%] md:absolute top-[20%] -left-[1%] rounded z-30"
            alt="macbook-xl-image"
          />
          <Image
            src={imageSourcesMobile[currentImageIndex]}
            height={300}
            width={300}
            className={`w-[89%] md:w-[23.5%] absolute top-[8%] md:top-[26.5%] left-[5.5%] md:left-[.8%] rounded h-[89%] md:h-[86%] ${
              isImageChanging ? "fade-enter" : "fade-enter-active"
            } -z-[1] md:z-10`}
            onLoad={() => setIsImageChanging(false)}
            placeholder="blur"
            blurDataURL={imageSourcesMobile[0]}
            alt="iphone-lg-image"
          />
        </div>
      </section>

      <section className="md:my-16 flex justify-around">
        <button
          onClick={() => setCurrentImageIndex(0)}
          className={`hidden md:block ${
            currentImageIndex === 0 ? "project-container-current" : ""
          } single-project-container`}
        >
          My Dubai Properties
        </button>
        <button
          onClick={() => setCurrentImageIndex(1)}
          className={`hidden md:block ${
            currentImageIndex === 1 ? "project-container-current" : ""
          } single-project-container`}
        >
          Supplers
        </button>
        <button
          onClick={() => setCurrentImageIndex(2)}
          className={`hidden md:block ${
            currentImageIndex === 2 ? "project-container-current" : ""
          } single-project-container`}
        >
          Daraz Clone
        </button>
        <button
          onClick={() => setCurrentImageIndex(3)}
          className={`hidden md:block ${
            currentImageIndex === 3 ? "project-container-current" : ""
          } single-project-container`}
        >
          Shop Now
        </button>
        <Link
          className="single-project-container flex items-center gap-4 cursor-pointer group text-sm lg:text-lg"
          href={"/projects"}
        >
          See all my projects
          <ArrowLongRightIcon className="w-6 transition-transform transform group-hover:translate-x-1" />
        </Link>
      </section>
    </>
  );
};

export default HomePageSlider;
