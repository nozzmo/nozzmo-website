import LeftRightHero, { LeftRightHeroProps } from "../LeftRightHero";
import content from "~/content/weAssess";

export default ({
  onStartProjectClick,
}: Omit<LeftRightHeroProps, "image" | "title" | "description">) => {
  return (
    <LeftRightHero
      onStartProjectClick={onStartProjectClick}
      {...content}
      image={content.image}
    />
  );
};
