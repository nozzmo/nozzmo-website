import { useIsSubmitting } from "remix-validated-form";
import Button from "~/components/Button";

export const SubmitButton = () => {
  const isSubmitting = useIsSubmitting();
  return (
    <Button
      level="secondary"
      size="large"
      title={isSubmitting ? "Sending..." : "Send"}
      button={{ type: "submit", disabled: isSubmitting }}
    />
  );
};
