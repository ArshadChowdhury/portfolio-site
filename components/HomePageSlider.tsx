"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const imageSourcesDesktop = [
  "/project_1.png",
  "/project_2.png",
  "/project_3.png",
];

const imageSourcesMobile = [
  "/project_1_mb.png",
  "/project_2_mb.png",
  "/project_3_mb.png",
];

const HomePageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the image source every 5 seconds
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imageSourcesDesktop.length
      );
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-full w-full flex justify-center fadeContainer">
      <div className="xl:bg-[url('/mac_frame.png')] bg-no-repeat xl:w-full z-10 xl:ml-[4%] fadeIn">
        <div className="w-full relative">
          <Image
            src={imageSourcesDesktop[currentImageIndex]}
            height={400}
            width={944}
            className="hidden xl:block absolute h-[598px] top-[28px] left-[128px] rounded"
            alt="macbook-xl-image"
          />
          <div className="xl:absolute -left-6 top-32">
            <Image
              src={"/iphone_frame.png"}
              height={400}
              width={480}
              className="xl:w-full relative z-50"
              alt="iphone-lg-frame"
            />
            <Image
              src={imageSourcesMobile[currentImageIndex]}
              height={300}
              width={300}
              className="absolute left-[18px] top-9 max-w-full h-auto xl:max-w-[88%] xl:h-[550px] rounded"
              alt="iphone-lg-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSlider;
