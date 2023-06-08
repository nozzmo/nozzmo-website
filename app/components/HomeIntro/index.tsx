import content from "~/content/homeIntro";
import Intro from "~/components/Intro";
import { IntroProps } from "~/components/Intro";

export default ({
  onMenuClicked,
  onStartProjectClicked,
}: Omit<IntroProps, "bg" | "logo" | "title" | "description">) => (
  <Intro
    {...content}
    onMenuClicked={onMenuClicked}
    onStartProjectClicked={onStartProjectClicked}
  />
);
