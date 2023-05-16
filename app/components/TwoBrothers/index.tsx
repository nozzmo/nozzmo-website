import content from "~/content/brothers";
import { H2, P } from "~/components/Typography";
import Button from "~/components/Button";
import ContentLimiter from "../ContentLimiter";
import useKonamiCode from "~/hooks/useKonamiCode";
import { useState } from "react";

interface TwoBrothersProps {
  image: string;
  title: string;
  description: string;
  onStartProjectClick: () => void;
}

const TwoBrothers = ({
  image,
  title,
  description,
  onStartProjectClick,
}: TwoBrothersProps) => (
  <section className="bg-slate-100 items-center md:flex md:h-screen md:snap-start">
    <div className="h-full md:flex-1">
      <img src={image} alt={title} className="object-cover h-full w-full" />
    </div>

    <ContentLimiter className="flex-1">
      <div className="max-w-xl py-8 lg:py-16">
        <H2 title={title} />
        <P text={description} className="mb-8" />
        <Button
          title="Start project"
          level="secondary"
          onClick={onStartProjectClick}
        />
      </div>
    </ContentLimiter>
  </section>
);

export default ({
  onStartProjectClick,
}: Omit<TwoBrothersProps, "image" | "title" | "description">) => {
  const [image, setImage] = useState(content.image);

  useKonamiCode(() => setImage(content.konami));

  return (
    <TwoBrothers
      onStartProjectClick={onStartProjectClick}
      {...content}
      image={image}
    />
  );
};
