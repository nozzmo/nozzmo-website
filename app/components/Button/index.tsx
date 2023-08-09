import type { ButtonHTMLAttributes } from "react";

type ButtonLevel = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  level?: ButtonLevel;
  size?: ButtonSize;
  button?: ButtonHTMLAttributes<HTMLButtonElement>;
}

interface IconButtonProps {
  onClick?: () => void;
  Icon: React.ReactNode;
}

const baseClass =
  "border border-solid duration-200 rounded-full transition-all focus:outline-none focus:shadow-outline active:scale-[0.98]";

const buttonLevelClass = (level?: ButtonLevel) => (curry: string) => {
  const primary =
    "border-white text-white hover:bg-white/20 active:bg-white/10";
  const secondary = "bg-white border-black/50 text-black active:bg-white/90";

  switch (level) {
    case "secondary":
      return `${curry} ${secondary}`;
    default:
      return `${curry} ${primary}`;
  }
};

const buttonSizeClass = (size?: ButtonSize) => (curry: string) => {
  const small = "px-4 py-2 text-xs";
  const medium = "px-16 py-3 text-sm";
  const large = "px-24 py-4 text-lg";

  switch (size) {
    case "small":
      return `${curry} ${small}`;
    case "large":
      return `${curry} ${large}`;
    default:
      return `${curry} ${medium}`;
  }
};

const buttonClass = (level?: ButtonLevel, size?: ButtonSize) =>
  buttonLevelClass(level)(buttonSizeClass(size)(baseClass));

const Button = ({
  title,
  onClick,
  level,
  size,
  className = "",
  button,
  ...rest
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={`${buttonClass(level, size)} ${className}`}
    {...button}
    {...rest}
  >
    {title}
  </button>
);

export const AnchorButton = ({
  title,
  level,
  size,
  className = "",
  href = "",
  ...rest
}: ButtonProps) => (
  <a
    href={href}
    className={`inline-block ${buttonClass(level, size)} ${className}`}
    {...rest}
  >
    {title}
  </a>
);

export const IconButton = ({ Icon, onClick, ...rest }: IconButtonProps) => (
  <button
    onClick={onClick}
    className="bg-white/0 duration-300 flex h-10 items-center justify-center outline-none rounded transition-colors w-10 hover:bg-white/20 active:scale-[0.98]"
    {...rest}
  >
    {Icon}
  </button>
);

export default Button;
