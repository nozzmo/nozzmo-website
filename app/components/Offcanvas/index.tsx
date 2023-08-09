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
  isOpen?: boolean;
}

const OffcanvasDummy = ({
  logo,
  options,
  preselected,
  formLogo,
  onClose,
  isOpen = false,
}: OffcanvasProps) => {
  useEscape(onClose);

  const { selected, select } = useSelect<OffcanvasOption>(options, preselected);

  return (
    <div
      className={`animate-all bg-black duration-500 fixed left-0 overflow-y-auto top-0 w-full z-20 ${
        isOpen ? "h-screen shadow-black/50 opacity-100" : "h-0 opacity-50"
      }`}
    >
      {selected != null ? (
        <SecondStep
          formLogo={formLogo}
          onClose={onClose}
          selectedOption={selected}
        />
      ) : (
        <FirstStep
          logo={logo}
          options={options}
          onOptionSelected={(index) => select(index)}
          onClose={onClose}
        />
      )}
    </div>
  );
};

const OffCanvas = ({
  options,
  onClose,
  preselected,
  isOpen,
}: Omit<OffcanvasProps, "logo" | "formLogo">) => (
  <OffcanvasDummy
    logo={blacklogo}
    formLogo={whitelogo}
    options={options}
    onClose={onClose}
    preselected={preselected}
    isOpen={isOpen}
  />
);

export default OffCanvas;
