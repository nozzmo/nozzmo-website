import { ValidatedForm } from "remix-validated-form";
import { X } from "react-feather";

import { BaseOffcanvasProps, OffcanvasOption } from ".";
import Navbar from "~/components/Navbar";
import bg from "~/assets/images/offcanvas.jpg";
import { IconButton } from "~/components/Button";
import { SubmitButton } from "./SubmitButton";
import OffcanvasInput, { OffcanvasTextarea } from "~/components/OffcanvasInput";
import ContentLimiter from "~/components/ContentLimiter";
import { H2 } from "~/components/Typography";
import validator from "./formValidator";

interface SecondStepProps extends BaseOffcanvasProps {
  formLogo: string;
  selectedOption: OffcanvasOption;
}

const SecondStep = ({ formLogo, onClose, selectedOption }: SecondStepProps) => (
  <section
    className="bg-cover h-screen text-white"
    style={{ backgroundImage: `url(${bg})` }}
  >
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
        <ValidatedForm validator={validator} method="post">
          <input type="hidden" name="form-name" value="contact" />
          <OffcanvasInput name="topic" placeholder="Topic" isHoney />
          <OffcanvasInput name="name" placeholder="Name" />
          <OffcanvasInput name="company" placeholder="Company" />
          <OffcanvasInput name="phone" placeholder="Phone" />
          <OffcanvasInput name="email" placeholder="Email" />
          <OffcanvasTextarea
            name="more"
            placeholder="Tell us about your project"
          />
          <SubmitButton />
        </ValidatedForm>
      </div>
    </ContentLimiter>
  </section>
);

export default SecondStep;
