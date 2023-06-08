import WeAssess from "~/components/WeAssess";
import Engagements from "~/components/Engagements";
import Discover from "~/components/Discover";
import FreeConsultation from "~/components/FreeConsultation";
import HiringFooter from "~/components/HiringFooter";
import OurTeam from "~/components/OurTeam";
import HowCanWeHelpYou from "~/components/HowCanWeHelpYou";
import OurProcess from "~/components/OurProcess";
import HiringIntro from "~/components/HiringIntro";

export default function Hiring() {
  return (
    <main className="h-screen overflow-auto">
      <HiringIntro />
      <WeAssess onStartProjectClick={() => null} />
      <HowCanWeHelpYou />
      <Engagements />
      <OurProcess />
      <Discover onStartProjectClick={() => null} />
      <FreeConsultation onStartProjectClick={() => null} />
      <OurTeam />
      <HiringFooter onStartProjectClick={() => null} />
    </main>
  );
}
