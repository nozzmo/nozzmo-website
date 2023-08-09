import Button from "~/components/Button";
import { H3 } from "~/components/Typography";

export interface ServiceProps {
  title: string;
  description: string;
  background: string;
  onClick?: () => void;
}

const Service = ({ title, description, background, onClick }: ServiceProps) => (
  <div className="bg-black group overflow-hidden relative md:h-auto md:p-20">
    <div
      className="bg-cover border-b border-b-white/30 duration-300 px-12 py-14 transition-all md:absolute md:bottom-0 md:group-hover:scale-100 md:group-hover:opacity-100 md:left-0 md:opacity-0 md:p-0 md:right-0 md:scale-105 md:top-0"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <H3 title={title} className="!text-3xl !mb-0 text-white md:hidden" />
    </div>
    <div className="relative h-full z-10 md:bg-none">
      <H3 title={title} className="hidden text-white md:block" />

      <div className="bg-black p-12 pb-20 md:bg-transparent md:px-0 md:pb-28">
        <p className="duration-500 mb-16 font-light text-white transition-all md:group-hover:opacity-100 md:mb-0 md:opacity-0">
          {description}
        </p>
        <Button
          title="Start a project"
          onClick={onClick}
          className="md:absolute md:bottom-0 md:left-0"
        />
      </div>
    </div>
  </div>
);

export default Service;
