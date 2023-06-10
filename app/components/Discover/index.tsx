import Hero, { HeroProps } from "~/components/Hero";
import content from "~/content/discover";

export default ({
  anchorHref,
}: Omit<
  HeroProps,
  "cta" | "title" | "description" | "onStartProjectClick"
>) => <Hero anchorHref={anchorHref} useAnchor {...content} avoidFullscreen />;
