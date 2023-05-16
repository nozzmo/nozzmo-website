import content from "~/content/wecan";
import ContentLimiter from "~/components/ContentLimiter";
import { H2, P } from "~/components/Typography";
import Button from "~/components/Button";
import bg from "~/assets/images/second_section.jpg";

interface WeCanProps {
  title: string;
  subtitle: string;
  description: string;
  onStartProjectClick: () => void;
}

const WeCan = ({
  title,
  subtitle,
  description,
  onStartProjectClick,
}: WeCanProps) => (
  <section
    className="bg-black bg-cover border-b border-white/30 items-center py-24 sm:py-32 md:flex md:h-screen md:snap-start"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="md:flex-1"></div>

    <ContentLimiter className="flex-1 text-white">
      <div className="max-w-xl">
        <div className="mb-6 text-sm uppercase text-gray-600">{subtitle}</div>
        <H2 title={title} />
        <P text={description} className="mb-8" />
        <Button title="Start project" onClick={onStartProjectClick} />
      </div>
    </ContentLimiter>
  </section>
);

export default function ({
  onStartProjectClick,
}: Omit<WeCanProps, "title" | "subtitle" | "description">) {
  return <WeCan {...content} onStartProjectClick={onStartProjectClick} />;
}
