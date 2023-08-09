import useIsVisible from "~/hooks/useIsVisible";
import ContentLimiter from "~/components/ContentLimiter";
import { H2, P } from "~/components/Typography";
import Button, { AnchorButton } from "~/components/Button";

export interface HeroProps {
  title: string;
  description?: string;
  cta: string;
  inverted?: boolean;
  useBlackCTA?: boolean;
  onStartProjectClick?: () => void;
  subtitle?: string;
  anchorHref?: string;
  useAnchor?: boolean;
  highlights?: {
    title?: string[];
    description?: string[];
  };
  avoidFullscreen?: boolean;
}

const Hero = ({
  title,
  description,
  cta,
  inverted = false,
  onStartProjectClick,
  subtitle,
  anchorHref,
  highlights,
  useAnchor = false,
  avoidFullscreen = false,
  useBlackCTA = false,
}: HeroProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section
      className={`${
        inverted ? "bg-black text-white" : "bg-slate-100"
      } items-center text-center md:flex ${
        avoidFullscreen ? "" : "md:h-screen md:snap-start"
      }`}
      ref={isVisibleRef}
    >
      <ContentLimiter className="flex-1">
        <div className="py-24 md:py-32">
          <div
            className="left-appearing appearing-turn-1 text-sm uppercase text-gray-900"
            data-is-visible={isVisible}
          >
            {subtitle}
          </div>
          <H2
            title={title}
            className="left-appearing appearing-turn-1"
            data-is-visible={isVisible}
            highlights={highlights?.title}
          />
          {!description && (
            <>
              <br />
            </>
          )}
          {description && (
            <P
              text={description}
              className="left-appearing appearing-turn-2 mb-8"
              data-is-visible={isVisible}
              highlights={highlights?.description}
            />
          )}

          {useAnchor ? (
            <AnchorButton
              title={cta}
              level={inverted || useBlackCTA ? "primary" : "secondary"}
              href={anchorHref}
              className={`left-appearing ${
                useBlackCTA ? "!bg-black !text-white" : ""
              }`}
              data-is-visible={isVisible}
            />
          ) : (
            <Button
              title={cta}
              level={inverted || useBlackCTA ? "primary" : "secondary"}
              onClick={onStartProjectClick}
              className={`left-appearing ${
                useBlackCTA ? "!bg-black !text-white" : ""
              }`}
              data-is-visible={isVisible}
            />
          )}
        </div>
      </ContentLimiter>
    </section>
  );
};

export default Hero;
