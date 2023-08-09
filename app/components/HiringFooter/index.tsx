import content from "~/content/hiringFooter";
import Copyright from "~/components/Footer/Copyright";
import ContentLimiter from "../ContentLimiter";
import { H2, P } from "~/components/Typography";
import { AnchorButton } from "~/components/Button";

interface HiringFooterProps {
  title: string;
  description: string;
  cta: string;
  logo: string;
  copyrightYear: number;
  copyright: string;
  anchorHref?: string;
  highlights?: {
    title?: string[];
  };
}

const HiringFooterDummy = ({
  anchorHref,
  highlights,
  title,
  description,
  cta,
  logo,
  copyrightYear,
  copyright,
}: HiringFooterProps) => (
  <section className="bg-black text-white">
    <ContentLimiter className="py-16 lg:py-24">
      <div className="max-w-xl">
        <H2 title={title} highlights={highlights?.title} />
        <P text={description} />
      </div>

      <br />
      <br />

      <div className="flex flex-col md:flex-row justify-between">
        <AnchorButton
          title={cta}
          href={anchorHref}
          level="secondary"
          className="max-w-[300px] mb-16 md:max-w-none md:mb-0"
        />
        <img src={logo} alt={title} className="max-w-[260px] m-auto md:m-0" />
      </div>
    </ContentLimiter>

    <Copyright year={copyrightYear} text={copyright} inverted />
  </section>
);

const HiringFooter = ({ anchorHref }: { anchorHref?: string }) => (
  <HiringFooterDummy {...content} anchorHref={anchorHref} />
);

export default HiringFooter;
