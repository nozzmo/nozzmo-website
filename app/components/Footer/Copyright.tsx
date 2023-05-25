interface CopyrightProps {
  year: number;
  text: string;
}

const Copyright = ({ year, text }: CopyrightProps) => (
  <div className="bg-black pb-8 text-center text-white">
    <span className="text-sm">© {year}</span>{" "}
    <span className="text-sm">{text}</span>
  </div>
);

export default Copyright;
