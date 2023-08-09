import type { AccordionItemProps } from "~/components/AccordionItem";
import AccordionItem from "~/components/AccordionItem";

interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
}

const Accordion = ({ items, className = "", ...rest }: AccordionProps) => {
  return (
    <div className={`md:pl-64 ${className}`} {...rest}>
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
