import content from "~/content/footer";
import { OffcanvasOption } from "../Offcanvas";
import Copyright from "./Copyright";
import offcanvasOptions from "~/content/offcanvasOptions";
import FooterLink from "./FooterLink";
import ContentLimiter from "~/components/ContentLimiter";
import useIsVisible from "~/hooks/useIsVisible";

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
}: FooterProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <footer className="bg-black border-t border-black/10 md:snap-start">
      <ContentLimiter>
        <div
          className="flex flex-col items-start pt-16 pb-8 md:flex-row md:justify-between md:pt-24 md:pb-16"
          ref={isVisibleRef}
        >
          <img
            src={logo}
            className="left-appearing appearing-turn-1 h-7 mb-8 mr-16 w-auto"
            data-is-visible={isVisible}
          />
          <div className="flex flex-col">
            {options.map((option, index) => (
              <FooterLink
                key={option.title}
                onClick={() => onOptionClick(index)}
                title={option.title}
                isVisible={isVisible}
                turn={index + 1}
              />
            ))}
          </div>
        </div>
      </ContentLimiter>
      <Copyright year={copyrightYear} text={copyright} />
    </footer>
  );
};

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
