import type { ImageProps } from "./Image";
import useIsVisible from "~/hooks/useIsVisible";
import ContentLimiter from "~/components/ContentLimiter";
import { H2 } from "~/components/Typography";
import Image from "./Image";

interface ImagesHeroProps {
  title: string;
  images: Omit<ImageProps, "turn" | "isVisible">[];
  highlights?: {
    title: string[];
  };
  avoidFullscreen?: boolean;
}

const ImagesHero = ({
  title,
  images,
  highlights,
  avoidFullscreen = false,
}: ImagesHeroProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section
      className={`bg-black py-24 md:py-32 ${
        avoidFullscreen ? "" : "md:h-screen md:snap-start"
      }`}
    >
      <ContentLimiter className="h-full">
        <div
          ref={isVisibleRef}
          className="flex flex-col h-full justify-center lg:px-6"
        >
          <H2
            title={title}
            className="appearing appearing-turn-1 max-w-4xl mx-auto text-center text-white"
            data-is-visible={isVisible}
            highlights={highlights?.title}
          />
          <div className="mt-12 text-center lg:mt-20">
            {images.map((image, turn) => (
              <Image
                key={image.name}
                {...image}
                isVisible={isVisible}
                turn={turn + 1}
              />
            ))}
          </div>
        </div>
      </ContentLimiter>
    </section>
  );
};

export default ImagesHero;
