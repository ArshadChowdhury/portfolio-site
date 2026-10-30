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

const ROTATE_MS = 5000;

const HomePageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false);
  const [paused, setPaused] = useState(false);

  // Auto-rotate, but not while the visitor is hovering or focusing the
  // slider, and not at all for people who asked for reduced motion.
  useEffect(() => {
    if (paused || sliderProjects.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const intervalId = setInterval(() => {
      setIsImageChanging(true);
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderProjects.length
      );
    }, ROTATE_MS);

    return () => clearInterval(intervalId);
  }, [paused]);

  // Guard against an index past the end (e.g. the project list shrank under a
  // live component) and against an empty list.
  const currentProject =
    sliderProjects[currentImageIndex % sliderProjects.length];
  if (!currentProject) return null;

  return (
    <section
      aria-labelledby="featured-work-heading"
      className="mb-16 w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mb-8 flex flex-col gap-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
          Featured work
        </span>
        <h2 id="featured-work-heading" className="text-2xl font-semibold lg:text-4xl">
          Products I&apos;ve helped ship
        </h2>
      </div>

      {/* Capped at the frame image's intrinsic width so the percentage-positioned
          screenshots and the frame share the same basis on wide viewports. */}
      <div className="relative mx-auto w-full max-w-[1200px]">
        <Image
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
          className={`hidden md:block rounded-md absolute top-[4%] left-[10.5%] w-[79%] h-[88%] object-cover object-top ${
            isImageChanging ? "fade-enter" : "fade-enter-active"
          }`}
          onLoad={() => setIsImageChanging(false)}
          alt={`${currentProject.projectHeading} desktop screenshot`}
        />

        <Image
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
          alt={`${currentProject.projectHeading} mobile screenshot`}
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:mt-40 lg:gap-x-16">
        <div
          role="group"
          aria-label="Choose a featured project"
          className="hidden flex-wrap items-center justify-center gap-x-10 md:flex lg:gap-x-16"
        >
          {sliderProjects.map((project, index) => (
            <button
              key={project.projectHeading}
              type="button"
              aria-pressed={currentImageIndex === index}
              onClick={() => {
                setIsImageChanging(true);
                setCurrentImageIndex(index);
              }}
              className={`${
                currentImageIndex === index ? "project-container-current" : ""
              } single-project-container`}
            >
              {project.projectHeading}
            </button>
          ))}
        </div>
        <Link
          className="single-project-container flex items-center gap-4 cursor-pointer group text-sm lg:text-lg"
          href={"/projects"}
        >
          See all my projects
          <ArrowLongRightIcon aria-hidden className="w-6 transition-transform transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default HomePageSlider;
