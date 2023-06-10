import useIsVisible from "~/hooks/useIsVisible";
import ContentLimiter from "~/components/ContentLimiter";
import { H2, P } from "~/components/Typography";
import Button, { AnchorButton } from "~/components/Button";

export interface LeftRightHeroProps {
  image: string;
  title: string;
  description: string;
  onStartProjectClick?: () => void;
  useAnchor?: boolean;
  anchorHref?: string;
  buttonText: string;
  highlights?: {
    title?: string[];
    description?: string[];
  };
}

const LeftRightHero = ({
  image,
  title,
  description,
  onStartProjectClick,
  useAnchor = false,
  anchorHref,
  buttonText,
  highlights,
}: LeftRightHeroProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section
      className="bg-slate-100 items-center md:flex md:h-screen md:snap-start"
      ref={isVisibleRef}
    >
      <div className="h-full md:flex-1">
        <img
          src={image}
          alt={title}
          className="appearing appearing-turn-4 object-cover h-full w-full"
          data-is-visible={isVisible}
        />
      </div>

      <ContentLimiter className="flex-1">
        <div className="max-w-xl py-24 lg:py-32">
          <H2
            title={title}
            className="left-appearing appearing-turn-1"
            data-is-visible={isVisible}
            highlights={highlights?.title}
          />
          <P
            text={description}
            className="left-appearing appearing-turn-2 mb-8"
            data-is-visible={isVisible}
            highlights={highlights?.description}
          />
          {useAnchor ? (
            <AnchorButton
              title={buttonText}
              level="secondary"
              href={anchorHref}
              className="left-appearing"
              data-is-visible={isVisible}
            />
          ) : (
            <Button
              title={buttonText}
              level="secondary"
              onClick={onStartProjectClick}
              className="left-appearing"
              data-is-visible={isVisible}
            />
          )}
        </div>
      </ContentLimiter>
    </section>
  );
};

export default LeftRightHero;
