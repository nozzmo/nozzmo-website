import type { HeroProps } from "~/components/Hero";
import Hero from "~/components/Hero";
import content from "~/content/discover";

const Discover = ({
  anchorHref,
}: Omit<
  HeroProps,
  "cta" | "title" | "description" | "onStartProjectClick"
>) => <Hero anchorHref={anchorHref} useAnchor {...content} avoidFullscreen />;

export default Discover;
