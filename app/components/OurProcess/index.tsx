import content from "~/content/ourProcess";
import { AccordionItemProps } from "~/components/AccordionItem";
import Accordion from "~/components/Accordion";
import ContentLimiter from "~/components/ContentLimiter";
import { H1 } from "~/components/Typography";

interface OurProcessProps {
  title: string;
  items: AccordionItemProps[];
}

const OurProcess = ({ title, items }: OurProcessProps) => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <ContentLimiter>
        <H1 title={title} />
        <br />
        <br />
        <Accordion items={items} />
      </ContentLimiter>
    </section>
  );
};

export default () => <OurProcess title={content.title} items={content.items} />;
