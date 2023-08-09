import type { HeroProps } from "~/components/Hero";
import Hero from "~/components/Hero";
import content from "~/content/freeConsultation";

const FreeConsultation = ({
  anchorHref,
}: Omit<
  HeroProps,
  "cta" | "title" | "description" | "onStartProjectClick"
>) => (
  <Hero
    anchorHref={anchorHref}
    {...content}
    inverted
    useAnchor
    avoidFullscreen
  />
);

export default FreeConsultation;
