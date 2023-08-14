import useIsVisible from "~/hooks/useIsVisible";
import ContentLimiter from "~/components/ContentLimiter";
import { H1, H2, P } from "~/components/Typography";
import Button, { AnchorButton } from "~/components/Button";

export interface LeftRightHeroProps {
  image: string;
  title: string;
  description: string;
  biggerTitle?: boolean;
  onStartProjectClick?: () => void;
  useAnchor?: boolean;
  anchorHref?: string;
  buttonText?: string;
  reversed?: boolean;
  inverted?: boolean;
  logo?: string;
  highlights?: {
    title?: string[];
    description?: string[];
  };
}

const LeftRightHero = ({
  image,
  title,
  description,
  logo,
  onStartProjectClick,
  useAnchor = false,
  anchorHref,
  buttonText,
  highlights,
  reversed = false,
  inverted = false,
  biggerTitle = false,
}: LeftRightHeroProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section
      className={`items-center md:flex md:h-screen md:snap-start ${
        reversed ? "md:flex-row-reverse" : ""
      } ${inverted ? "bg-black text-white" : "bg-slate-100"}
      `}
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
          {logo && (
            <img
              src={logo}
              alt={title}
              className="appearing appearing-turn-4 mb-8 object-cover"
              data-is-visible={isVisible}
            />
          )}
          {biggerTitle ? (
            <H1
              title={title}
              className="left-appearing appearing-turn-1"
              data-is-visible={isVisible}
              highlights={highlights?.title}
            />
          ) : (
            <H2
              title={title}
              className="left-appearing appearing-turn-1"
              data-is-visible={isVisible}
              highlights={highlights?.title}
            />
          )}
          <P
            text={description}
            className="left-appearing appearing-turn-2 mb-8"
            data-is-visible={isVisible}
            highlights={highlights?.description}
          />
          {buttonText && (
            <>
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
            </>
          )}
        </div>
      </ContentLimiter>
    </section>
  );
};

export default LeftRightHero;
