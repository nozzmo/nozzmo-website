import useIntegerRotation from "~/hooks/useIntegerRotation";
import Slide, { SlideProps } from "./Slide";
import Controls from "./Controls";

interface TextSiderProps {
  slides: SlideProps[];
  interval?: number;
}

const TextSlider = ({ slides, interval = 10000 }: TextSiderProps) => {
  const { selected } = useIntegerRotation(slides.length, interval);

  return (
    <section className="border-t border-black/30 h-screen relative">
      {slides.map((slide, index) => (
        <Slide key={slide.text} {...slide} isActive={index === selected} />
      ))}

      <Controls numberOfSlides={slides.length} selected={selected} />
    </section>
  );
};

export default TextSlider;
