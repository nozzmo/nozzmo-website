import WeAssess from "~/components/WeAssess";
import Engagements from "~/components/Engagements";
import Discover from "~/components/Discover";
import FreeConsultation from "~/components/FreeConsultation";
import HiringFooter from "~/components/HiringFooter";
import OurTeam from "~/components/OurTeam";

export default function Hiring() {
  return (
    <main>
      <WeAssess onStartProjectClick={() => null} />
      <Engagements />
      <Discover onStartProjectClick={() => null} />
      <FreeConsultation onStartProjectClick={() => null} />
      <OurTeam />
      <HiringFooter onStartProjectClick={() => null} />
    </main>
  );
}
