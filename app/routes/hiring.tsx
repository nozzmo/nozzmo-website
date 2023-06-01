import WeAssess from "~/components/WeAssess";
import Engagements from "~/components/Engagements";
import Discover from "~/components/Discover";
import HiringFooter from "~/components/HiringFooter";

export default function Hiring() {
  return (
    <main>
      <WeAssess onStartProjectClick={() => null} />
      <Engagements />
      <Discover onStartProjectClick={() => null} />
      <HiringFooter />
    </main>
  );
}
