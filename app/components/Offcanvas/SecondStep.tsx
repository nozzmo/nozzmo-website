import { X } from "react-feather";

import { BaseOffcanvasProps, OffcanvasOption } from ".";
import Navbar from "~/components/Navbar";
import Button, { IconButton } from "~/components/Button";
import OffcanvasInput, { OffcanvasTextarea } from "~/components/OffcanvasInput";
import ContentLimiter from "~/components/ContentLimiter";
import { H2 } from "~/components/Typography";

interface SecondStepProps extends BaseOffcanvasProps {
  formLogo: string;
  selectedOption: OffcanvasOption;
}

const SecondStep = ({ formLogo, onClose, selectedOption }: SecondStepProps) => (
  <section className="bg-black text-white fixed h-screen left-0 overflow-y-auto top-0 w-full z-10">
    <ContentLimiter className="pb-12 pt-6 sm:pb-16 sm:pt-8 md:pb-24 md:pt-10 lg:pb-32">
      <Navbar
        left={<img src={formLogo} />}
        right={
          <>
            <IconButton Icon={<X color="white" />} onClick={onClose} />
          </>
        }
      />
    </ContentLimiter>

    <ContentLimiter className="animate-appear pb-6 sm:pb-14 md:flex md:pb-20">
      <div className="mb-8 md:flex-1 md:mr-12 lg:mr-20 xl:mr-40">
        <H2 title={selectedOption.title} />
      </div>

      <div className="md:flex-1">
        <form>
          <OffcanvasInput name="name" placeholder="Name" />
          <OffcanvasInput name="company" placeholder="Company" />
          <OffcanvasInput name="phone" placeholder="Phone" />
          <OffcanvasInput name="email" placeholder="Email" />
          <OffcanvasTextarea
            name="more"
            placeholder="Tell us about your project"
          />
          <Button
            level="secondary"
            size="large"
            title="Send"
            button={{ type: "submit" }}
          />
        </form>
      </div>
    </ContentLimiter>
  </section>
);

export default SecondStep;
