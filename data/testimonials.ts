export type Testimonial = {
  id: number;
  name: string;
  title: string;
  img: string;
  href: string;
  icon: string;
  desc: string;
};

export const testimonialsData: Testimonial[] = [
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
    desc: "Arshad is a fast learner with great communication skills, he's tech-savvy & have worked on several projects and shown great potential at Grind Reel. He's a valuable member of Grind Reel community. He's also reliable, you can always expect him to get the job done.",
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
    desc: "Arshad has been collaborating with me & big open source communities for quite some time, which has made him familiar with all stages of the software lifecycle from the initial architecture to final deployment, he's highly recommended for all kind of projects.",
  },
];
