import content from "~/content/howCanWeHelp";
import IconItem, { IconItemProps } from "~/components/IconItem";
import ContentLimiter from "~/components/ContentLimiter";
import { H1 } from "~/components/Typography";

interface HowCanWeHelpYouProps {
  title: string;
  items: IconItemProps[];
}

const HowCanWeHelpYouDummy = ({ title, items }: HowCanWeHelpYouProps) => {
  return (
    <section className="bg-black overflow-x-hidden">
      <ContentLimiter className="py-16 lg:py-24">
        <H1 title={title} className="!mb-0 text-white" />
      </ContentLimiter>
      <div className="bg-black grid grid-cols-1 ml-[-1px] mr-[-1px] text-white lg:grid-cols-2">
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
