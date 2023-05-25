export interface ImpactProps {
  highlight: string;
  title: string;
  addPlus?: boolean;
}

const Impact = ({ highlight, title, addPlus = false }: ImpactProps) => (
  <div className={`max-w[288px] text-center ${addPlus ? "mr-9" : ""}`}>
    <div className="mb-8 relative text-8xl">
      {highlight}
      {addPlus && (
        <div className="absolute top-1/2 translate-x-[100%] -translate-y-1/2 right-0 text-6xl">
          +
        </div>
      )}
    </div>
    <div className="text-xl">{title}</div>
  </div>
);

export default Impact;
