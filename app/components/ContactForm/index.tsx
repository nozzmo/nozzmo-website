import { ValidatedForm } from "remix-validated-form";

import OffcanvasInput, { OffcanvasTextarea } from "~/components/OffcanvasInput";
import { SubmitButton } from "./SubmitButton";
import validator from "./formValidator";

interface ContactForm {
  name: string;
  resumed?: boolean;
  size?: "small" | "medium" | "large";
}

const ContactForm = ({
  name,
  size = "large",
  resumed = false,
}: ContactForm) => (
  <ValidatedForm validator={validator} method="post" resetAfterSubmit>
    <input type="hidden" name="form-name" value={name} />
    <OffcanvasInput name="topic" placeholder="Topic" isHoney />
    <OffcanvasInput name="name" placeholder="Name" />
    {!resumed && (
      <>
        <OffcanvasInput name="company" placeholder="Company" />
        <OffcanvasInput name="phone" placeholder="Phone" />
      </>
    )}
    <OffcanvasInput name="email" placeholder="Email" />
    <OffcanvasTextarea name="more" placeholder="Tell us about your project" />
    <SubmitButton size={size} />
  </ValidatedForm>
);

export default ContactForm;
