import content from "~/content/brothers";
import { H2, P } from "~/components/Typography";
import Button from "~/components/Button";
import ContentLimiter from "../ContentLimiter";
import useKonamiCode from "~/hooks/useKonamiCode";
import { useState } from "react";
import useIsVisible from "~/hooks/useIsVisible";

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
}: TwoBrothersProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section className="bg-slate-100 items-center md:flex md:h-screen md:snap-start">
      <div className="h-full md:flex-1">
        <img
          src={image}
          alt={title}
          className="appearing appearing-turn-4 object-cover h-full w-full"
          data-is-visible={isVisible}
        />
      </div>

      <ContentLimiter className="flex-1">
        <div className="max-w-xl py-8 lg:py-16">
          <H2
            title={title}
            className="left-appearing appearing-turn-1"
            data-is-visible={isVisible}
          />
          <P
            text={description}
            className="left-appearing appearing-turn-2 mb-8"
            data-is-visible={isVisible}
          />
          <Button
            title="Start project"
            level="secondary"
            onClick={onStartProjectClick}
            className="left-appearing appearing-turn-3"
            data-is-visible={isVisible}
          />
          <div ref={isVisibleRef} />
        </div>
      </ContentLimiter>
    </section>
  );
};

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
