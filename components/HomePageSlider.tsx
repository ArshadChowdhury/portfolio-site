"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const imageSourcesDesktop = [
  "/project_1.png",
  "/project_2.png",
  "/project_3.png",
  "/project_4.png",
];

const imageSourcesMobile = [
  "/project_1_mb.png",
  "/project_2_mb.png",
  "/project_3_mb.png",
  "/project_4_mb.png",
];

const HomePageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [isImageChanging, setIsImageChanging] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setIsImageChanging(true);
      // Change the image source every 5 seconds
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imageSourcesDesktop.length
      );
    }, 8000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full mb-20">
      <div>
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
            priority
            src={imageSourcesDesktop[currentImageIndex]}
            height={700}
            width={1044}
            className="hidden md:block rounded-md absolute top-[4%] left-[10.5%] w-[79%] h-[88%]"
            // className={`hidden md:block rounded-md absolute top-[4%] left-[10.5%] w-[79%] h-[88%] ${
            //   isImageChanging ? "transition-image" : ""
            // }`}
            // onLoad={() => setIsImageChanging(false)}
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
            priority
            src={imageSourcesMobile[currentImageIndex]}
            height={300}
            width={300}
            className="w-[89%] md:w-[23.5%] absolute top-[8%] md:top-[26.5%] left-[5.5%] md:left-[.8%] rounded h-[89%] md:h-[86%] -z-[1] md:z-10"
            alt="iphone-lg-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageSlider;
