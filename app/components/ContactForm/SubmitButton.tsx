import { useIsSubmitting } from "remix-validated-form";
import Button from "~/components/Button";

interface SubmitButtonProps {
  size?: "small" | "medium" | "large";
}

export const SubmitButton = ({ size }: SubmitButtonProps) => {
  const isSubmitting = useIsSubmitting();
  return (
    <Button
      level="secondary"
      size={size}
      title={isSubmitting ? "Sending..." : "Send"}
      button={{ type: "submit", disabled: isSubmitting }}
    />
  );
};
