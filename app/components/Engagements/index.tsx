import content from "~/content/engagements";
import ImagesHero from "~/components/ImagesHero";

export default function () {
  return <ImagesHero {...content} avoidFullscreen />;
}
