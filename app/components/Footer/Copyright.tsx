interface CopyrightProps {
  year: number;
  text: string;
  inverted?: boolean;
}

const Copyright = ({ year, text, inverted = false }: CopyrightProps) => (
  <div
    className={`py-4 text-center ${
      inverted
        ? "bg-white text-black text-center"
        : "bg-black text-center text-white"
    }`}
  >
    <span className="text-sm">© {year}</span>{" "}
    <span className="text-sm">{text}</span>
  </div>
);

export default Copyright;
