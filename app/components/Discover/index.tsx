import Hero, { HeroProps } from "~/components/Hero";
import content from "~/content/discover";

export default ({
  onStartProjectClick,
}: Omit<HeroProps, "cta" | "title" | "description">) => (
  <Hero onStartProjectClick={onStartProjectClick} {...content} />
);
