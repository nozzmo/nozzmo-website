import LeftRightHero, { LeftRightHeroProps } from "../LeftRightHero";
import content from "~/content/weAssess";

export default ({
  anchorHref,
}: Omit<
  LeftRightHeroProps,
  "image" | "title" | "description" | "onStartProjectClick" | "buttonText"
>) => {
  return (
    <LeftRightHero
      useAnchor
      anchorHref={anchorHref}
      {...content}
      image={content.image}
      buttonText={content.cta}
    />
  );
};
