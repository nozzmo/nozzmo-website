// react input component, white border bottom, transparent, gray placeholder, white letter, using tailwindcss
interface OffcanvasInputProps {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
}

const commonInputClasses = `bg-transparent border-b border-white/30 box-border duration-300 font-thin mb-5 outline-none placeholder-gray-400 px-4 py-3 text-left transition w-full focus:border-white text-white sm:text-lg md:text-xl`;

const OffcanvasInput = ({
  placeholder,
  value,
  onChange,
}: OffcanvasInputProps) => (
  <input
    className={commonInputClasses}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange && onChange(e.target.value)}
  />
);

export const OffcanvasTextarea = ({
  placeholder,
  value,
  onChange,
}: OffcanvasInputProps) => (
  <textarea
    className={`${commonInputClasses} h-40`}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange && onChange(e.target.value)}
  />
);

export default OffcanvasInput;
