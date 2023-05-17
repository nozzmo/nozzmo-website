import Button from "~/components/Button";
import { H3 } from "~/components/Typography";

export interface ServiceProps {
  title: string;
  description: string;
  background: string;
  onClick?: () => void;
}

const Service = ({ title, description, background, onClick }: ServiceProps) => (
  <div className="bg-black group overflow-hidden p-12 relative md:p-20">
    <div
      className="absolute duration-300 transition-all bg-cover bottom-0 left-0 md:opacity-0 right-0 scale-105 top-0 md:group-hover:scale-100 md:group-hover:opacity-100"
      style={{
        backgroundImage: `url(${background})`,
        // boxShadow: "0 0 1px 0 white",
      }}
    />
    <div className="relative h-full pb-20 z-10">
      <H3 title={title} className="text-white" />
      <p className="duration-500 md:opacity-0 text-white transition-all md:group-hover:opacity-100">
        {description}
      </p>
      <Button
        title="Start a project"
        onClick={onClick}
        className="absolute bottom-0 left-0"
      />
    </div>
  </div>
);

export default Service;
