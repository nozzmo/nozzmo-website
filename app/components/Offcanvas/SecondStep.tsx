import { X } from "react-feather";

import type { BaseOffcanvasProps, OffcanvasOption } from ".";
import Navbar from "~/components/Navbar";
import bg from "~/assets/images/offcanvas.jpg";
import { IconButton } from "~/components/Button";
import ContactForm from "~/components/ContactForm";
import ContentLimiter from "~/components/ContentLimiter";
import { H2 } from "~/components/Typography";

interface SecondStepProps extends BaseOffcanvasProps {
  formLogo: string;
  selectedOption: OffcanvasOption;
}

const SecondStep = ({ formLogo, onClose, selectedOption }: SecondStepProps) => (
  <section
    className="bg-cover h-screen text-white overflow-auto"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <ContentLimiter className="pb-12 pt-6 sm:pb-16 sm:pt-8 md:pb-24 md:pt-10 lg:pb-32">
      <Navbar
        left={<img src={formLogo} alt={selectedOption.title} />}
        right={
          <>
            <IconButton Icon={<X color="white" />} onClick={onClose} />
          </>
        }
      />
    </ContentLimiter>

    <ContentLimiter className="animate-appear pb-32 sm:pb-14 md:flex md:pb-20">
      <div className="mb-8 md:flex-1 md:mr-12 lg:mr-20 xl:mr-40">
        <H2 title={selectedOption.title} />
      </div>

      <div className="md:flex-1">
        <ContactForm name="contact" />
      </div>
    </ContentLimiter>
  </section>
);

export default SecondStep;
