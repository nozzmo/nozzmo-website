import { useField } from "remix-validated-form";

interface OffcanvasInputProps {
  placeholder: string;
  name: string;
  isHoney?: boolean;
}

const InputError = ({ error }: { error?: string }) =>
  error ? (
    <div className="animate-appear mt-2 text-red-400 text-sm">{error}</div>
  ) : null;

const commonInputClasses = `bg-transparent border-b border-white/30 box-border duration-300 font-thin outline-none placeholder-gray-400 px-4 py-3 text-left transition w-full focus:border-white text-white sm:text-lg md:text-xl`;

const OffcanvasInput = ({
  placeholder,
  name,
  isHoney = false,
}: OffcanvasInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div className={`${!isHoney ? "mb-5" : ""}`}>
      <input
        className={`${commonInputClasses} ${isHoney ? "hidden" : ""} ${
          error ? "border-red-400" : ""
        }`}
        placeholder={placeholder}
        {...getInputProps({ id: name })}
      />
      <InputError error={error} />
    </div>
  );
};

export const OffcanvasTextarea = ({
  placeholder,
  name,
}: OffcanvasInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div className="mb-5">
      <textarea
        className={`${commonInputClasses} h-40`}
        placeholder={placeholder}
        {...getInputProps({ id: name })}
      />
      <InputError error={error} />
    </div>
  );
};

export default OffcanvasInput;
