import GetStarted from "@/components/GetStarted";
import HomePageSlider from "@/components/HomePageSlider";
import ContactMe from "@/components/ContactMe";
import EverythingNeeded from "@/components/EverythingNeeded";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <GetStarted />
      <Reveal>
        <HomePageSlider />
      </Reveal>
      <Reveal>
        <EverythingNeeded />
      </Reveal>
      <Reveal>
        <TechStack />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <ContactMe />
      </Reveal>
    </main>
  );
}
