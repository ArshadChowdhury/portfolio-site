import GetStarted from "@/components/GetStarted";
import ExperiencePreview from "@/components/ExperiencePreview";
import HomePageSlider from "@/components/HomePageSlider";
import FocusAreas from "@/components/FocusAreas";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <GetStarted />
      <Reveal>
        <HomePageSlider />
      </Reveal>
      <Reveal>
        <ExperiencePreview />
      </Reveal>
      <Reveal>
        <FocusAreas />
      </Reveal>
      <Reveal>
        <TechStack />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
    </div>
  );
}
