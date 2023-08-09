import content from "~/content/services";
import type { ServiceProps } from "./Service";
import Service from "./Service";
import ContentLimiter from "~/components/ContentLimiter";
import { H2 } from "~/components/Typography";
import useIsVisible from "~/hooks/useIsVisible";

interface OurServicesProps {
  title: string;
  subtitle: string;
  services: ServiceProps[];
  onServiceClick: () => void;
}

const OurServicesDummy = ({
  title,
  subtitle,
  services,
  onServiceClick,
}: OurServicesProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section className="bg-black md:snap-start" ref={isVisibleRef}>
      <ContentLimiter className="py-12 md:py-18 lg:py-24">
        <div
          className="left-appearing appearing-turn-1 text-sm uppercase text-gray-600"
          data-is-visible={isVisible}
        >
          {subtitle}
        </div>
        <H2
          title={title}
          className="left-appearing appearing-turn-2 mb-0 text-white sm:mb-0 md:mb-0 lg:mb-0"
          data-is-visible={isVisible}
        />
      </ContentLimiter>

      <div className="m-auto max-w-7xl">
        <div className="bg-white/50 gap-[1px] grid grid-cols-1 py-[1px] sm:grid-cols-2 lg:grid-cols-3 xl:px-[1px]">
          {services.map((service) => (
            <Service
              key={service.title}
              {...service}
              onClick={onServiceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const OurServices = ({
  onServiceClick,
}: Omit<OurServicesProps, "title" | "subtitle" | "services">) => (
  <OurServicesDummy {...content} onServiceClick={onServiceClick} />
);

export default OurServices;
