import { AccordionItemProps } from "~/components/AccordionItem";
import AccordionItem from "~/components/AccordionItem";

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion = ({ items }: AccordionProps) => {
  return (
    <div className="md:pl-64">
      {items.map((item) => {
        const { title, description, number } = item;
        return (
          <AccordionItem
            key={title}
            title={title}
            description={description}
            number={number}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
