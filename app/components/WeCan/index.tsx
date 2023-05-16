import content from "~/content/wecan";
import ContentLimiter from "~/components/ContentLimiter";
import { H2, P } from "~/components/Typography";
import Button from "~/components/Button";
import bg from "~/assets/images/second_section.jpg";
import useIsVisible from "~/hooks/useIsVisible";

interface WeCanProps {
  title: string;
  subtitle: string;
  description: string;
  onStartProjectClick: () => void;
}

const WeCan = ({
  title,
  subtitle,
  description,
  onStartProjectClick,
}: WeCanProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section
      className="bg-black bg-cover border-b border-white/30 items-center py-24 sm:py-32 md:flex md:h-screen md:snap-start"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="md:flex-1"></div>

      <ContentLimiter className="flex-1 text-white">
        <div className="max-w-xl">
          <div
            className="left-appearing appearing-turn-1 mb-6 text-sm uppercase text-gray-600"
            ref={isVisibleRef}
            data-is-visible={isVisible}
          >
            {subtitle}
          </div>
          <H2
            title={title}
            className="left-appearing appearing-turn-2"
            data-is-visible={isVisible}
          />
          <P
            text={description}
            className="mb-8 left-appearing appearing-turn-3"
            data-is-visible={isVisible}
          />
          <Button
            className="left-appearing appearing-turn-4"
            title="Start project"
            onClick={onStartProjectClick}
            data-is-visible={isVisible}
          />
        </div>
      </ContentLimiter>
    </section>
  );
};

export default function ({
  onStartProjectClick,
}: Omit<WeCanProps, "title" | "subtitle" | "description">) {
  return <WeCan {...content} onStartProjectClick={onStartProjectClick} />;
}
