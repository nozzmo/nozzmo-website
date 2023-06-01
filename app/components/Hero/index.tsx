import useIsVisible from "~/hooks/useIsVisible";
import ContentLimiter from "~/components/ContentLimiter";
import { H2, P } from "~/components/Typography";
import Button from "~/components/Button";

export interface HeroProps {
  title: string;
  description: string;
  cta: string;
  onStartProjectClick: () => void;
}

const Hero = ({ title, description, cta, onStartProjectClick }: HeroProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section
      className="text-center bg-slate-100 items-center md:flex md:h-screen md:snap-start"
      ref={isVisibleRef}
    >
      <ContentLimiter className="flex-1">
        <div className="py-8 lg:py-16">
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
            title={cta}
            level="secondary"
            onClick={onStartProjectClick}
            className="left-appearing"
            data-is-visible={isVisible}
          />
        </div>
      </ContentLimiter>
    </section>
  );
};

export default Hero;
