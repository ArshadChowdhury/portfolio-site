import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const testimonialsData = [
  {
    id: 1,
    name: "Mohammad Al-Amin",
    title: "Senior Developer",
    img: "/nirob_vai.jpg",
    icon: "/twitter.png",
    href: "https://twitter.com/0xweathered",
    desc: "Arshad always had perseverance in the face of obstacles, he went above & beyond to solve any problem that was presented to him. He loves technology. He's friendly & easy to work with. I've known him for years, he's very reliable & trustworthy person. He'd be a great asset to any company he works for. ",
    featured: false,
  },
  {
    id: 2,
    name: "Joshua Fluke",
    title: "CEO at Grind Reel",
    img: "/jshua.jpg",
    icon: "/youtube.svg",
    href: "https://www.youtube.com/c/JoshuaFluke1",
    desc: "Arshad is a fast learner with great communication skills, he's tech-savvy & have worked on several projects and shown great potential at Grind Reel. He's still a valuable member of Grind Reel community, He has a great understanding of the front-end technologies & great research capabilities. He's also very reliable, you can always expect him to get the job done in time. ",
    featured: true,
  },
  {
    id: 3,
    name: "Iftekhar Ahmed",
    title: "Data Scientist",
    img: "/iftekhar.jpg",
    href: "https://www.linkedin.com/in/ahmed-iftekhar/",
    icon: "/linkedin.png",
    desc: "Arshad has been collaborating with me & big open source communities for quite some time now, which has made him intimately familiar with all the stages of the web lifecycle from the initial architecture to final deployment, he's highly recommended for all kind of projects.",
    featured: false,
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
  featured: boolean;
};

const Testimonials = () => (
  <section className="flex flex-col items-center mx-4 lg:mx-auto gap-12">
    <h1 className="text-xl lg:text-4xl text-center font-semibold py-4">
      Testimonials{" "}
    </h1>
    <div className="lg:w-4/5 w-full grid grid-flow-row-dense gap-14">
      {testimonialsData.map((data: TestimonialDataTypes, index: number) => (
        <div
          key={index}
          className={`${
            data.featured ? "scale-[115%] hover:scale-125" : "hover:scale-110"
          } bg-gray-600 rounded-lg p-6 transition-all duration-500`}
        >
          <div className="flex justify-center items-center gap-4">
            <ArrowUturnRightIcon className="w-8" />
            <Image
              height={60}
              width={60}
              className="rounded-full"
              src={data.img}
              alt="Testimonial_Person"
            />
            <Link href={data.href} target="_blank" rel="noreferrer">
              {" "}
              <Image
                height={40}
                width={40}
                className="rounded-sm"
                src={data.icon}
                alt="icon"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 pt-6 text-lg text-center">
            {data.desc}
            <div className="flex flex-col gap-1 items-center">
              <h3>{data.name}</h3>
              <h4>{data.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
