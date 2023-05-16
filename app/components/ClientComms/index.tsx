import content from "~/content/clientComms";
import TextSlider from "~/components/TextSlider";

export default function () {
  return (
    <section className="bg-white md:snap-start">
      <TextSlider
        slides={content.comments.map((comment) => ({ text: comment }))}
      />
    </section>
  );
}
