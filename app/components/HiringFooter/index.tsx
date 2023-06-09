import footerContent from "~/content/footer";
import content from "~/content/hiringFooter";
import Copyright from "~/components/Footer/Copyright";
import ContentLimiter from "../ContentLimiter";
import { H2, P } from "~/components/Typography";
import { AnchorButton } from "~/components/Button";

interface HiringFooterProps {
  anchorHref?: string;
}

export default function HiringFooter({ anchorHref }: HiringFooterProps) {
  return (
    <section className="bg-black text-white">
      <ContentLimiter className="py-16 lg:py-24">
        <div className="max-w-xl">
          <H2 title={content.title} />
          <P text={content.description} />
        </div>

        <br />
        <br />

        <div className="flex flex-col md:flex-row justify-between">
          <AnchorButton
            title={content.cta}
            href={anchorHref}
            level="secondary"
            className="max-w-[300px] mb-16 md:max-w-none md:mb-0"
          />
          <img
            src={content.logo}
            alt={content.title}
            className="m-auto md:m-0"
          />
        </div>
      </ContentLimiter>

      <Copyright
        year={footerContent.copyrightYear}
        text={footerContent.copyright}
        inverted
      />
    </section>
  );
}
