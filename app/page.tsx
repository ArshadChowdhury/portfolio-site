import Image from "next/image";
import ThemeButton from "@/components/ThemeButton";
import GetStarted from "@/components/GetStarted";
import Link from "next/link";
import HomePageSlider from "@/components/HomePageSlider";
import {
  ArrowLongRightIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/20/solid";
import RandomAdvice from "@/components/RandomAdvice";
import ContactMe from "@/components/ContactMe";
import EverythingNeeded from "@/components/EverythingNeeded";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <GetStarted />
      <HomePageSlider />
      <EverythingNeeded />
      <Testimonials />
      <RandomAdvice />
      <ContactMe />
    </main>
  );
}
