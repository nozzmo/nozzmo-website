import { Fragment } from "react";

import content from "~/content/impact";
import Impact, { ImpactProps } from "./Impact";
import { H2 } from "~/components/Typography";
import ContentLimiter from "~/components/ContentLimiter";

interface OurImpactProps {
  title: string;
  impacts: ImpactProps[];
}

const OurImpact = ({ title, impacts }: OurImpactProps) => (
  <section className="bg-white border-t border-black-50 py-24 sm:py-32 md:snap-start">
    <ContentLimiter className="max-w-7xl mx-auto ">
      <H2 title={title} className="text-center" />
      <br />
      <br />
      <br />
      <div className="justify-center items-center flex flex-col md:flex-row">
        {impacts.map((impact, i) => (
          <Fragment key={impact.highlight}>
            <Impact {...impact} />
            {i < impacts.length - 1 && (
              <div className="bg-black h-2 my-8 rounded w-2 md:mb-7 md:mt-0 md:mx-8" />
            )}
          </Fragment>
        ))}
      </div>
    </ContentLimiter>
  </section>
);

export default function () {
  return <OurImpact {...content} />;
}
