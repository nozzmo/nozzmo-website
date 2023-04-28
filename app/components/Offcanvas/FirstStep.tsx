import { BaseOffcanvasProps, OffcanvasOption } from ".";
import OffcanvasAnchor from "~/components/OffcanvasLink";
import Navbar from "~/components/Navbar";
import { IconButton } from "~/components/Button";
import { X } from "react-feather";
import ContentLimiter from "../ContentLimiter";

interface FirstStepProps extends BaseOffcanvasProps {
  logo: string;
  options: OffcanvasOption[];
  onOptionSelected: (index: number) => void;
}

const FirstStep = ({
  logo,
  options = [],
  onOptionSelected,
  onClose,
}: FirstStepProps) => (
  <section className="bg-gray-200 h-screen">
    <ContentLimiter className="pb-12 pt-6 sm:pb-16 sm:pt-8 md:pb-24 md:pt-10 lg:pb-32">
      <Navbar
        left={<img src={logo} />}
        right={
          <>
            <IconButton Icon={<X />} onClick={onClose} />
          </>
        }
      />
    </ContentLimiter>

    <nav className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
      {options.map((option, i) => (
        <OffcanvasAnchor
          key={option.value}
          onClick={() => {
            onOptionSelected(i);
          }}
          title={option.title}
        />
      ))}
    </nav>

    <ContentLimiter className="pb-6 sm:pb-8 md:pb-10">
      <strong>We are Nozzmo:</strong> E:{" "}
      <a href="mailto:info@nozzmo.com">info@nozzmo.com</a>
    </ContentLimiter>

    <div className="px-8 sm:px-16 md:px-24 lg:px-32"></div>
  </section>
);

export default FirstStep;
