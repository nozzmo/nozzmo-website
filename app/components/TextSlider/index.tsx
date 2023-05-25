import useIntegerRotation from "~/hooks/useIntegerRotation";
import Slide, { SlideProps } from "./Slide";
import Controls from "./Controls";
import useCursorPosition from "~/hooks/useCursorPosition";
import useMouseOver from "~/hooks/useMouseOver";
import SliderButton from "./SliderButton";
import useMediaQuery from "~/hooks/useMediaQuery";

interface TextSiderProps {
  slides: SlideProps[];
  interval?: number;
}

const TextSlider = ({ slides, interval = 10000 }: TextSiderProps) => {
  const { selected, previous, next, stop } = useIntegerRotation(
    slides.length,
    interval
  );
  const { isOverRef, isOver } = useMouseOver<HTMLDivElement>();
  const isTouch = useMediaQuery("(hover:none)");
  const { x, y } = useCursorPosition(!isTouch && isOver);
  const xPercentage = x / (isOverRef.current?.clientWidth || 1);
  const showLeft = xPercentage > 0 && xPercentage < 0.5 && isOver;
  const showRight = xPercentage > 0 && xPercentage >= 0.5 && isOver;

  return (
    <div
      className="border-t border-black/30 h-screen relative"
      ref={isOverRef}
      onClick={() => {
        if (showLeft) previous();
        if (showRight) next();
      }}
    >
      {slides.map((slide, index) => (
        <Slide key={slide.text} {...slide} isActive={index === selected} />
      ))}

      {!isTouch && (
        <>
          <SliderButton x={x} y={y} show={showLeft} isLeft />
          <SliderButton x={x} y={y} show={showRight} />
        </>
      )}

      <Controls numberOfSlides={slides.length} selected={selected} />
    </div>
  );
};

export default TextSlider;
