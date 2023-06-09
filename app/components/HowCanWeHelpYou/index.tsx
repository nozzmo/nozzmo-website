import content from "~/content/howCanWeHelp";
import IconItem, { IconItemProps } from "~/components/IconItem";
import ContentLimiter from "~/components/ContentLimiter";
import { H1 } from "~/components/Typography";
import useIsVisible from "~/hooks/useIsVisible";

interface HowCanWeHelpYouProps {
  title: string;
  items: IconItemProps[];
}

const HowCanWeHelpYouDummy = ({ title, items }: HowCanWeHelpYouProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section
      className="bg-black overflow-x-hidden md:snap-start"
      ref={isVisibleRef}
    >
      <ContentLimiter className="py-16 lg:py-24">
        <H1
          title={title}
          className="!mb-0 text-white appearing appearing-turn-1"
          data-is-visible={isVisible}
        />
      </ContentLimiter>
      <div
        className="appearing appearing-turn-2 bg-black grid grid-cols-1 ml-[-1px] mr-[-1px] text-white lg:grid-cols-2"
        data-is-visible={isVisible}
      >
        {items.map((item) => {
          const { icon, title, description } = item;
          return (
            <IconItem
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default () => (
  <HowCanWeHelpYouDummy title={content.title} items={content.items} />
);
