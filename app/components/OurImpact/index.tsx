import { Fragment } from "react";

import type { ImpactProps } from "./Impact";
import content from "~/content/impact";
import Impact from "./Impact";
import { H2 } from "~/components/Typography";
import ContentLimiter from "~/components/ContentLimiter";

interface OurImpactProps {
  title: string;
  impacts: ImpactProps[];
}

const OurImpactDummy = ({ title, impacts }: OurImpactProps) => (
  <section className="bg-white border-t border-black-50 flex flex-col justify-center min-h-screen py-24 sm:py-32 md:snap-start">
    <ContentLimiter className="max-w-7xl mx-auto ">
      <H2 title={title} className="text-center" />
      <br />
      <br />
      <br className="hidden md:block" />
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

const OurImpact = () => <OurImpactDummy {...content} />;

export default OurImpact;
