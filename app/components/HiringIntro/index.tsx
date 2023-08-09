import content from "~/content/hiringIntro";
import Intro from "~/components/Intro";

const HiringIntro = () => (
  <Intro {...content} formName="hiring" hideMenu includeForm />
);

export default HiringIntro;
