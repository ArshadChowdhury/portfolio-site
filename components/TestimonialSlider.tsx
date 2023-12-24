"use client";

import React from "react";
import Slider from "react-slick";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    id: 1,
    name: "Jonathan Greensted",
    title: "Experienced CTO / CIO / CDO",
    img: "/jonathan.jpg",
    icon: "/linkedin.png",
    href: "https://www.linkedin.com/in/jonathangreensted/",
    desc: "Arshad was brilliant. Really helped me get to grips with Nextjs. Thank-you. Highly recommended and I must say his expertise in Next.js is truly commendable. Not only did he help me grasp the intricacies of Next.js, but he also provided other invaluable insights.",
  },
  {
    id: 2,
    name: "Joshua Fluke",
    title: "CEO at Grind Reel",
    img: "/jshua.jpg",
    icon: "/youtube.svg",
    href: "https://www.youtube.com/c/JoshuaFluke1",
    desc: "Arshad is a fast learner with great communication skills, he's tech-savvy & have worked on several projects and shown great potential at Grind Reel. He's still a valuable member of Grind Reel community. He's also very reliable, you can always expect him to get the job done in time.",
  },
  {
    id: 3,
    name: "Mohammad Al-Amin",
    title: "Senior Developer",
    img: "/nirob_vai.jpg",
    icon: "/twitter.png",
    href: "https://twitter.com/0xweathered",
    desc: "Arshad always had perseverance in the face of obstacles, he went above & beyond to solve any problem that was presented to him. He loves technology. He's friendly & easy to work with. I've known him for years, he's very reliable & trustworthy person.",
  },

  {
    id: 4,
    name: "Iftekhar Ahmed",
    title: "Data Scientist",
    img: "/iftekhar.jpg",
    href: "https://www.linkedin.com/in/ahmed-iftekhar/",
    icon: "/linkedin.png",
    desc: "Arshad has been collaborating with me & big open source communities for quite some time now, which has made him intimately familiar with all the stages of the web lifecycle from the initial architecture to final deployment, he's highly recommended for all kind of projects.",
  },
];

type TestimonialDataTypes = {
  id: number;
  name: string;
  title: string;
  img: string;
  href: string;
  icon: string;
  desc: string;
};

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="w-11/12 lg:w-4/5 mx-auto" {...settings}>
      {testimonialsData.map((data: TestimonialDataTypes, index: number) => (
        <div
          key={index}
          className={`dark:bg-gray-700 bg-gray-100 rounded-lg p-3 md:p-6 transition-all duration-1000`}
        >
          <div className="flex justify-center items-center gap-4">
            <ArrowUturnRightIcon className="w-8" />
            <Image
              priority
              height={60}
              width={60}
              className="rounded-full"
              src={data.img}
              alt="Testimonial_Person"
            />
            <Link href={data.href} target="_blank" rel="noreferrer">
              {" "}
              <Image
                priority
                height={40}
                width={40}
                className="rounded-sm"
                src={data.icon}
                alt="icon"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 pt-6 px-4 text-sm md:text-lg text-center">
            {data.desc}
            <div className="flex flex-col gap-1 items-center">
              <h3>{data.name}</h3>
              <h4>{data.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
