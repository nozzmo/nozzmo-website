import useIsVisible from "~/hooks/useIsVisible";
import ContentLimiter from "~/components/ContentLimiter";
import { H2 } from "~/components/Typography";
import Image, { ImageProps } from "./Image";

interface ImagesHeroProps {
  title: string;
  images: Omit<ImageProps, "turn" | "isVisible">[];
  highlights?: {
    title: string[];
  };
}

const ImagesHero = ({ title, images, highlights }: ImagesHeroProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section className="bg-black h-screen pb-16 pt-12 md:pb-22 md:pt-18 md:snap-start lg:pb-44 lg:pt-32">
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
