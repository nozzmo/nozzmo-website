import { useState } from "react";
import LeftRightHero, { LeftRightHeroProps } from "../LeftRightHero";
import content from "~/content/brothers";
import useKonamiCode from "~/hooks/useKonamiCode";

export default ({
  onStartProjectClick,
}: Omit<
  LeftRightHeroProps,
  "image" | "title" | "description" | "buttonText"
>) => {
  const [image, setImage] = useState(content.image);

  useKonamiCode(() => setImage(content.konami));

  return (
    <LeftRightHero
      onStartProjectClick={onStartProjectClick}
      {...content}
      image={image}
      buttonText={content.cta}
    />
  );
};
