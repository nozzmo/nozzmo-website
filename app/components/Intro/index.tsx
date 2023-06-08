import { Menu } from "react-feather";
import { ValidatedForm } from "remix-validated-form";

import Navbar from "~/components/Navbar";
import ContentLimiter from "../ContentLimiter";
import Button, { IconButton } from "~/components/Button";
import { H1, P } from "~/components/Typography";
import useIsVisible from "~/hooks/useIsVisible";
import ContactForm from "~/components/ContactForm";

export interface IntroProps {
  title: string;
  description: string;
  onMenuClicked?: () => void;
  onStartProjectClicked?: () => void;
  hideMenu?: boolean;
  logo?: string;
  image?: string;
  bg: string;
  includeForm?: boolean;
}

const Intro = ({
  title,
  description,
  onMenuClicked,
  onStartProjectClicked,
  hideMenu = false,
  logo,
  bg,
  image,
  includeForm = false,
}: IntroProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section
      className={`bg-black bg-cover border-b border-t border-white/20 text-white ${
        includeForm ? "md:h-screen" : "h-screen"
      }`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <ContentLimiter
        className={`flex flex-col h-full pb-10 pt-6 sm:pt-8 sm:pb-16 md:pt-10 ${
          includeForm ? "!pt-14 !pb-14" : ""
        }`}
      >
        {!hideMenu && (
          <Navbar
            left={logo ? <img src={logo} /> : null}
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
        )}

        <div className="flex flex-1 flex-col gap-16 lg:flex-row lg:items-middle lg:justify-between">
          <div
            className="items-start flex flex-col flex-1 justify-center max-w-xl mt-0"
            ref={isVisibleRef}
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="left-appearing appearing-turn-1 h-6 mb-7"
                data-is-visible={isVisible}
              />
            )}
            <H1
              title={title}
              className="left-appearing appearing-turn-2"
              data-is-visible={isVisible}
            />
            <P
              className="left-appearing appearing-turn-3 leading-7 text-base sm:text-lg md:leading-8 md:text-lg"
              data-is-visible={isVisible}
              text={description}
            />
          </div>

          {includeForm && (
            <div
              className="left-appearing appearing-turn-4 flex flex-col flex-1 justify-center lg:items-end"
              data-is-visible={isVisible}
            >
              <div className="border border-white/80 max-w-md mx-auto px-6 py-12 rounded-lg w-full lg:mx-0">
                <ContactForm name="contact" size="medium" resumed />
              </div>
            </div>
          )}
        </div>
      </ContentLimiter>
    </section>
  );
};

export default Intro;
