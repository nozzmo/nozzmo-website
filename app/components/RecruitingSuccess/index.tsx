import type { LeftRightHeroProps } from "../LeftRightHero";
import LeftRightHero from "../LeftRightHero";
import content from "~/content/recruitingSuccess";

const RecruitingSuccess = ({
  anchorHref,
}: Omit<
  LeftRightHeroProps,
  "image" | "title" | "description" | "onStartProjectClick"
>) => {
  return (
    <LeftRightHero
      anchorHref={anchorHref}
      {...content}
      image={content.image}
      reversed
      inverted
      biggerTitle
      useAnchor
    />
  );
};

export default RecruitingSuccess;
