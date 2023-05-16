import { useRef } from "react";
import { Menu } from "react-feather";

import content from "~/content/intro";
import logo from "~/assets/images/logo.svg";
import bg from "~/assets/images/first_section.jpg";
import Navbar from "~/components/Navbar";
import ContentLimiter from "../ContentLimiter";
import Button, { IconButton } from "~/components/Button";
import { H1, P } from "~/components/Typography";
import useIsVisible from "~/hooks/useIsVisible";

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
}: IntroProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section
      className="bg-black bg-cover border-b border-t border-white/20 text-white md:h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <ContentLimiter className="flex flex-col pb-10 pt-6 sm:pt-8 sm:pb-16 md:h-full md:pt-10">
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

        <div className="flex flex-col max-w-xl mt-12 sm:mt-16 md:flex-1 md:mt-0 md:justify-center">
          <div ref={isVisibleRef} />
          <H1
            title={title}
            className="left-appearing appearing-turn-1"
            data-is-visible={isVisible}
          />
          <P
            className="left-appearing appearing-turn-2 leading-7 text-base sm:text-lg md:leading-8 md:text-lg"
            data-is-visible={isVisible}
            text={description}
          />
        </div>
      </ContentLimiter>
    </section>
  );
};

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
