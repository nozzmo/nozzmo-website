import content from "~/content/ourTeam";
import ImageHighlight, {
  ImageHighlightProps,
} from "~/components/ImageHighlight";
import { H1 } from "~/components/Typography";
import ContentLimiter from "~/components/ContentLimiter";

interface OurTeamProps {
  title: string;
  members: {
    name: string;
    image: string;
    description: string;
  }[];
  highlights?: {
    title?: string[];
  };
}

const OurTeam = ({ title, members, highlights }: OurTeamProps) => (
  <section className="bg-white py-16 lg:py-24 md:snap-start">
    <ContentLimiter>
      <H1 title={title} highlights={highlights?.title} />
      <br />
      <br />
      <div>
        {members.map((member, index) => {
          const { name, description, image } = member;
          return (
            <ImageHighlight
              key={name}
              image={image}
              title={name}
              description={description}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          );
        })}
      </div>
    </ContentLimiter>
  </section>
);

export default () => <OurTeam {...content} />;
