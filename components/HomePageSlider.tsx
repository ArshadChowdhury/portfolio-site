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
    <section className="min-h-[650px] lg:min-h-[780px] xl:bg-[url('/mac_frame.png')] bg-no-repeat bg-none w-full z-10 ml-[3%]">
      {/* <div className="flex justify-center mb-16"> */}
      <div className="w-full relative flex justify-center">
        <Image
          priority
          src={imageSourcesDesktop[currentImageIndex] || "/project_1.png"}
          height={400}
          width={944}
          className="hidden xl:block absolute h-[598px] top-[28px] left-[128px] rounded"
          alt="macbook-xl-image"
        />
        <div className="absolute lg:-left-[1%] -left-[0.5%] top-0 xl:top-32 w-full flex justify-center xl:w-[25%]">
          <Image
            priority
            src={"/iphone_frame.png"}
            height={400}
            width={480}
            className="w-[80%] md:w-[40%] xl:w-full relative z-50"
            alt="iphone-lg-frame"
          />
          <Image
            priority
            src={imageSourcesMobile[currentImageIndex] || "/project_1_mb.png"}
            height={300}
            width={300}
            className="absolute left-[15%] md:left-[32.5%] xl:left-[6%] top-[6%] w-[70%] md:w-[35%] xl:w-[88%] h-[92%] rounded"
            alt="iphone-lg-image"
          />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default HomePageSlider;
