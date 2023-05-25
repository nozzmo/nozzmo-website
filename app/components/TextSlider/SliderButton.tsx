import rightArrowButton from "~/assets/images/right_arrow_button.svg";
import blacklogo from "~/assets/images/logo_black.svg";

interface SliderButtonProps {
  size?: number;
  x?: number;
  y?: number;
  show?: boolean;
  isLeft?: boolean;
}

const SliderButton = ({
  x = 0,
  y = 0,
  size = 72,
  show = false,
  isLeft = false,
}: SliderButtonProps) => {
  return (
    <button
      className="block duration-500 fixed pointer-events-none rounded-full transition-all top-[50vh] z-30"
      style={{
        left: show ? x : isLeft ? "2rem" : "calc(100% - 2rem)",
        opacity: show ? 1 : 0,
        transition: show ? "none" : undefined,
        top: show ? `${y - size / 2}px` : undefined,
        animation: show
          ? isLeft
            ? "buttonAppearLeft 0.25s ease-in-out"
            : "buttonAppearRight 0.25s ease-in-out"
          : undefined,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <img
        src={rightArrowButton}
        className={isLeft ? "rotate-180" : ""}
        width="100%"
      />
    </button>
  );
};

export default SliderButton;
