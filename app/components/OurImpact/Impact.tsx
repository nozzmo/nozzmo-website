export interface ImpactProps {
  highlight: string;
  title: string;
}

const Impact = ({ highlight, title }: ImpactProps) => (
  <div className="max-w[288px] text-center">
    <div className="mb-8 text-8xl">{highlight}</div>
    <div className="text-xl">{title}</div>
  </div>
);

export default Impact;
