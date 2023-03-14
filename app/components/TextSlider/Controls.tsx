interface ControlsProps {
  numberOfSlides: number;
  selected: number;
}

const Controls = ({ numberOfSlides, selected }: ControlsProps) => (
  <div className="absolute bottom-24 flex justify-center left-0 right-0">
    {Array.from({ length: numberOfSlides }).map((_, index) => (
      <div
        key={index}
        className={`bg-black h-2 mx-1 rounded w-2 ${
          index === selected ? "opacity-100" : "opacity-50"
        }`}
      />
    ))}
  </div>
);

export default Controls;
