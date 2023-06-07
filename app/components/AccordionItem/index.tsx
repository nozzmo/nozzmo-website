import { useState } from "react";
import { H3, P } from "~/components/Typography";

export interface AccordionItemProps {
  title: string;
  description: string;
  number: string;
}

const AccordionItem = ({ title, description, number }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <div>
        <div>
          <span className="text-black font-bold">{number}</span>
        </div>
        <H3 title={title} />
      </div>
      <div>{isOpen ? "^" : "v"}</div>
      {isOpen && <P text={description} />}
    </div>
  );
};

export default AccordionItem;
