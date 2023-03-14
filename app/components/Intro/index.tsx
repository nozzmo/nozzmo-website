import { Menu } from "react-feather";

import content from "~/content/intro";
import logo from "~/assets/images/logo.svg";
import Navbar from "~/components/Navbar";
import ContentLimiter from "../ContentLimiter";
import Button, { IconButton } from "~/components/Button";
import { H1, P } from "~/components/Typography";

interface IntroProps {
  title: string;
  description: string;
  onMenuClicked: () => void;
  onStartProjectClicked: () => void;
}

const Intro = ({
  title,
  description,
  onMenuClicked,
  onStartProjectClicked,
}: IntroProps) => (
  <section className="bg-black border-b border-white/30 text-white">
    <ContentLimiter className="pb-10 pt-6 sm:pt-8 sm:pb-16 md:pt-10 md:pb-24 lg:pb-44">
      <Navbar
        left={<img src={logo} />}
        right={
          <>
            <Button
              title="Start a project"
              className="hidden mr-4 sm:block"
              onClick={onStartProjectClicked}
            />
            <IconButton Icon={<Menu />} onClick={onMenuClicked} />
          </>
        }
      />

      <div className="max-w-xl mt-12 sm:mt-16 md:mt-24 xl:mt-40">
        <H1 title={title} />
        <P
          className="leading-7 text-base sm:text-lg md:leading-8 md:text-lg"
          text={description}
        />
      </div>
    </ContentLimiter>
  </section>
);

export default ({
  onMenuClicked,
  onStartProjectClicked,
}: Omit<IntroProps, "title" | "description">) => (
  <Intro
    {...content}
    onMenuClicked={onMenuClicked}
    onStartProjectClicked={onStartProjectClicked}
  />
);
