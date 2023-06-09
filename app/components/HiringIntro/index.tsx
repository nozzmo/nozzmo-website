import content from "~/content/hiringIntro";
import Intro from "~/components/Intro";

export default () => (
  <Intro {...content} formName="hiring" hideMenu includeForm />
);
