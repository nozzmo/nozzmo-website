import Button from "~/components/Button";
import { H3 } from "~/components/Typography";

export interface ServiceProps {
  title: string;
  description: string;
  background: string;
  onClick?: () => void;
}

const Service = ({ title, description, background, onClick }: ServiceProps) => (
  <div
    className="bg-black p-12 md:p-20 relative"
    onClick={onClick}
    style={{
      backgroundImage: `url(${background})`,
      // boxShadow: "0 0 1px 0 white",
    }}
  >
    <H3 title={title} className="text-white" />
    <p className="mb-24 text-white">{description}</p>
    <Button
      title="Start a project"
      onClick={onClick}
      className="absolute bottom-12 left-12 md:bottom-20 md:left-20"
    />
  </div>
);

export default Service;
