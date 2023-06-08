import content from "~/content/ourProcess";
import { AccordionItemProps } from "~/components/AccordionItem";
import Accordion from "~/components/Accordion";
import ContentLimiter from "~/components/ContentLimiter";
import { H1 } from "~/components/Typography";
import useIsVisible from "~/hooks/useIsVisible";

interface OurProcessProps {
  title: string;
  items: AccordionItemProps[];
}

const OurProcess = ({ title, items }: OurProcessProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section className="bg-white py-16 lg:py-24" ref={isVisibleRef}>
      <ContentLimiter>
        <H1
          title={title}
          data-is-visible={isVisible}
          className="appearing appearing-turn-1"
        />
        <br />
        <br />
        <Accordion
          items={items}
          data-is-visible={isVisible}
          className="appearing appearing-turn-2"
        />
      </ContentLimiter>
    </section>
  );
};

export default () => <OurProcess title={content.title} items={content.items} />;
