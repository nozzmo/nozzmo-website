import blacklogo from "~/assets/images/logo_black.svg";
import whitelogo from "~/assets/images/logo.svg";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import useEscape from "~/hooks/useEscape";
import useSelect from "~/hooks/useSelect";

export interface OffcanvasOption {
  title: string;
  value: string;
}

export interface BaseOffcanvasProps {
  onClose: () => void;
}

interface OffcanvasProps extends BaseOffcanvasProps {
  logo: string;
  formLogo: string;
  options: OffcanvasOption[];
  preselected?: number;
}

const Offcanvas = ({
  logo,
  options,
  preselected,
  formLogo,
  onClose,
}: OffcanvasProps) => {
  useEscape(onClose);

  const { selected, select } = useSelect<OffcanvasOption>(options, preselected);

  if (selected != null) {
    return (
      <SecondStep
        formLogo={formLogo}
        onClose={onClose}
        selectedOption={selected}
      />
    );
  }

  return (
    <FirstStep
      logo={logo}
      options={options}
      onOptionSelected={(index) => select(index)}
      onClose={onClose}
    />
  );
};

export default ({
  options,
  onClose,
  preselected,
}: Omit<OffcanvasProps, "logo" | "formLogo">) => (
  <Offcanvas
    logo={blacklogo}
    formLogo={whitelogo}
    options={options}
    onClose={onClose}
    preselected={preselected}
  />
);
