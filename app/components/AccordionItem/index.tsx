import { useState } from "react";

import caretUp from "~/assets/images/caretup.svg";
import { H3, P } from "~/components/Typography";

export interface AccordionItemProps {
  title: string;
  description: string;
  number: string;
}

const AccordionItem = ({ title, description, number }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b border-black/50 cursor-pointer duration-500 pl-14 pt-7 relative transition-all last:border-b-0 ${
        !isOpen ? "pb-0" : "pb-7"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="absolute left-2 text-black/50 top-8">{number}</span>
      <H3 title={title} className="!mb-7 pr-12" />
      <img
        src={caretUp}
        alt={isOpen ? "open" : "closed"}
        className={`absolute duration-300 right-2 top-10 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
      {isOpen && <P text={description} className="animate-appear" />}
    </div>
  );
};

export default AccordionItem;
