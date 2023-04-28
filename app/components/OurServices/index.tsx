import content from "~/content/services";
import Service, { ServiceProps } from "./Service";
import ContentLimiter from "~/components/ContentLimiter";
import { H2 } from "~/components/Typography";

interface OurServicesProps {
  title: string;
  subtitle: string;
  services: ServiceProps[];
  onServiceClick: () => void;
}

const OurServices = ({
  title,
  subtitle,
  services,
  onServiceClick,
}: OurServicesProps) => (
  <section className="bg-black">
    <ContentLimiter className="py-12 md:py-18 lg:py-24">
      <div className="text-sm uppercase text-gray-600">{subtitle}</div>
      <H2 title={title} className="mb-0 text-white sm:mb-0 md:mb-0 lg:mb-0" />
    </ContentLimiter>

    <div className="m-auto max-w-7xl">
      <div className="bg-white/50 gap-[1px] grid grid-cols-1 py-[1px] sm:grid-cols-2 lg:grid-cols-3 xl:px-[1px]">
        {services.map((service) => (
          <Service key={service.title} {...service} onClick={onServiceClick} />
        ))}
      </div>
    </div>
  </section>
);

export default function ({
  onServiceClick,
}: Omit<OurServicesProps, "title" | "subtitle" | "services">) {
  return <OurServices {...content} onServiceClick={onServiceClick} />;
}
