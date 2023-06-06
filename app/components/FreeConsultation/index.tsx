import Hero, { HeroProps } from "~/components/Hero";
import content from "~/content/freeConsultation";

export default ({
  onStartProjectClick,
}: Omit<HeroProps, "cta" | "title" | "description">) => (
  <Hero onStartProjectClick={onStartProjectClick} {...content} inverted />
);
