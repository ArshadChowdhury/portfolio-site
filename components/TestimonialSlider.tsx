"use client";

import Slider from "react-slick";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { testimonialsData } from "@/data/testimonials";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="mx-auto w-11/12 lg:w-4/5" {...settings}>
      {testimonialsData.map((data) => (
        <div
          key={data.id}
          className="rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm transition-all duration-700 dark:border-slate-800 dark:bg-slate-900/80 md:p-6"
        >
          <div className="flex items-center justify-center gap-4">
            <ArrowUturnRightIcon className="w-8 text-sky-700 dark:text-sky-300" />
            <Image
              priority
              height={60}
              width={60}
              className="rounded-full"
              src={data.img}
              alt={data.name}
            />
            <Link href={data.href} target="_blank" rel="noopener noreferrer">
              <Image
                priority
                height={40}
                width={40}
                className="rounded-sm"
                src={data.icon}
                alt=""
              />
            </Link>
          </div>
          <blockquote className="flex flex-col items-center gap-4 px-4 pt-6 text-center text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
            &ldquo;{data.desc}&rdquo;
            <footer className="flex flex-col items-center gap-1">
              <cite className="not-italic font-semibold text-slate-950 dark:text-white">
                {data.name}
              </cite>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {data.title}
              </span>
            </footer>
          </blockquote>
        </div>
      ))}
    </Slider>
  );
}
