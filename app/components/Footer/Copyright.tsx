interface CopyrightProps {
  year: number;
  text: string;
  legalNotice?: string;
  inverted?: boolean;
}

const Copyright = ({
  year,
  text,
  legalNotice,
  inverted = false,
}: CopyrightProps) => (
  <div
    className={`py-4 text-center ${
      inverted
        ? "bg-white text-black text-center"
        : "bg-black text-center text-white"
    }`}
  >
    <span className="text-sm">© {year}</span>{" "}
    <span className="text-sm">{text}</span>
    {legalNotice ? (
      <div
        className={`mt-1 text-xs ${inverted ? "text-black/50" : "text-white/50"}`}
      >
        {legalNotice}
      </div>
    ) : null}
  </div>
);

export default Copyright;
