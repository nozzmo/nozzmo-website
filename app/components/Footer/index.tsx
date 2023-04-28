import content from "~/content/footer";
import { OffcanvasOption } from "../Offcanvas";
import Copyright from "./Copyright";
import offcanvasOptions from "~/content/offcanvasOptions";
import FooterLink from "./FooterLink";
import ContentLimiter from "~/components/ContentLimiter";

interface FooterProps {
  copyrightYear: number;
  copyright: string;
  logo: string;
  options: OffcanvasOption[];
  onOptionClick: (optionIndex: number) => void;
}

const Footer = ({
  copyrightYear,
  copyright,
  logo,
  options,
  onOptionClick,
}: FooterProps) => (
  <footer className="bg-white border-t border-black/10">
    <ContentLimiter>
      <div className="flex flex-col items-start py-16 md:flex-row md:justify-between md:py-24">
        <img src={logo} className="h-7 mb-8 mr-16 w-auto" />
        <div className="flex flex-col">
          {options.map((option, index) => (
            <FooterLink
              key={option.title}
              onClick={() => onOptionClick(index)}
              title={option.title}
            />
          ))}
        </div>
      </div>
    </ContentLimiter>
    <Copyright year={copyrightYear} text={copyright} />
  </footer>
);

export default function ({
  onOptionClick,
}: Omit<FooterProps, "copyrightYear" | "copyright" | "logo" | "options">) {
  return (
    <Footer
      {...content}
      options={offcanvasOptions}
      onOptionClick={onOptionClick}
    />
  );
}
