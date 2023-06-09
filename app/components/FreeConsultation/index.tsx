import Hero, { HeroProps } from "~/components/Hero";
import content from "~/content/freeConsultation";

export default ({
  anchorHref,
}: Omit<
  HeroProps,
  "cta" | "title" | "description" | "onStartProjectClick"
>) => <Hero anchorHref={anchorHref} {...content} inverted useAnchor />;
