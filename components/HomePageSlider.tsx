"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { projectsInfo } from "@/data/projects";

const sliderProjects = projectsInfo.filter(
  (project): project is typeof project & { slider: NonNullable<typeof project.slider> } =>
    Boolean(project.slider)
);

const HomePageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsImageChanging(true);
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderProjects.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const currentProject = sliderProjects[currentImageIndex];

  return (
    <>
      <section className="mb-16 w-full">
        <div className="mb-8 flex flex-col gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
            Featured work
          </span>
          <h2 className="text-2xl font-semibold lg:text-4xl">
            Products I&apos;ve helped ship
          </h2>
        </div>
        <div className="relative">
          <Image
            priority
            src={"/mac_frame.png"}
            height={688}
            width={1200}
            sizes="(min-width: 1280px) 1216px, 90vw"
            className="hidden md:block"
            alt=""
          />
          <Image
            src={currentProject.slider.desktop}
            height={700}
            width={1044}
            sizes="(min-width: 1280px) 960px, 72vw"
            className={`hidden md:block rounded-md absolute top-[4%] left-[10.5%] w-[79%] h-[88%] ${
              isImageChanging ? "fade-enter" : "fade-enter-active"
            }`}
            onLoad={() => setIsImageChanging(false)}
            alt={`${currentProject.projectHeading} desktop project preview`}
          />

          <Image
            priority
            src={"/iphone_frame.png"}
            height={599}
            width={300}
            sizes="(min-width: 768px) 27vw, 100vw"
            className="w-full md:w-[27%] md:absolute top-[20%] -left-[1%] rounded z-30"
            alt=""
          />
          <Image
            src={currentProject.slider.mobile}
            height={300}
            width={300}
            sizes="(min-width: 768px) 24vw, 89vw"
            className={`w-[89%] md:w-[23.5%] absolute top-[8%] md:top-[26.5%] left-[5.5%] md:left-[.8%] rounded h-[89%] md:h-[86%] ${
              isImageChanging ? "fade-enter" : "fade-enter-active"
            } -z-[1] md:z-10`}
            onLoad={() => setIsImageChanging(false)}
            alt={`${currentProject.projectHeading} mobile project preview`}
          />
        </div>
      </section>

      <section className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:mt-40 lg:gap-x-16">
        {sliderProjects.map((project, index) => (
          <button
            key={project.projectHeading}
            type="button"
            onClick={() => setCurrentImageIndex(index)}
            className={`hidden md:block ${
              currentImageIndex === index ? "project-container-current" : ""
            } single-project-container`}
          >
            {project.projectHeading}
          </button>
        ))}
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
