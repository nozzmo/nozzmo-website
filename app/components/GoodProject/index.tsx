import type { HeroProps } from "~/components/Hero";
import Hero from "~/components/Hero";
import content from "~/content/goodProject";

const GoodProject = ({
  onStartProjectClick,
}: Omit<HeroProps, "description" | "title" | "cta"> & {
  onStartProjectClick: () => void;
}) => (
  <Hero
    {...content}
    onStartProjectClick={onStartProjectClick}
    avoidFullscreen
    useBlackCTA
  />
);

export default GoodProject;
