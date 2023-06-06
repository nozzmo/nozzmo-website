import content from "~/content/ourTeam";
import ImageHighlight from "~/components/ImageHighlight";
import { H1 } from "~/components/Typography";
import ContentLimiter from "~/components/ContentLimiter";

const OurTeam = () => {
  const { title, members } = content;

  return (
    <section className="bg-white py-16 lg:py-24">
      <ContentLimiter>
        <H1 title={title} />
        <br />
        <br />
        <div>
          {members.map((member, index) => {
            const { name, description, image } = member;
            return (
              <ImageHighlight
                key={member.name}
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
};

export default OurTeam;
