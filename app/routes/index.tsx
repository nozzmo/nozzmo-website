import { useMemo, useState, useRef } from "react";
import type { ActionArgs } from "@remix-run/node";

import HomeIntro from "~/components/HomeIntro";
import TwoBrothers from "~/components/TwoBrothers";
import Offcanvas from "~/components/Offcanvas";
import useCloseable from "~/hooks/useCloseable";
import offcanvasOptions, {
  DEFAULT_OFFCANVAS_OPTION,
} from "~/content/offcanvasOptions";
import OurServices from "~/components/OurServices";
import Customers from "~/components/Customers";
import WeCan from "~/components/WeCan";
import OurImpact from "~/components/OurImpact";
import Footer from "~/components/Footer";
import ClientComms from "~/components/ClientComms";
import CommonRouteWrapper, {
  commonLoader,
  commonAction,
} from "~/components/CommonRouteWrapper";
import GoodProject from "~/components/GoodProject";

export async function loader() {
  return await commonLoader();
}

export async function action(args: ActionArgs) {
  return await commonAction(args);
}

export default function Index() {
  const container = useRef<HTMLDivElement>(null);
  const [preselected, setPreselected] = useState<number | undefined>(undefined);
  const { isOpen, close, open } = useCloseable(false);

  const clickOpenOption = useMemo<(index: number) => void>(
    () => (index: number) => {
      setPreselected(index);
      open();
    },
    [setPreselected, open]
  );
  const startProjectClicked = useMemo<() => void>(
    () => () => {
      setPreselected(DEFAULT_OFFCANVAS_OPTION);
      open();
    },
    [setPreselected, open]
  );

  return (
    <CommonRouteWrapper onSuccess={close}>
      <main
        className={`
          h-screen
          ${isOpen ? "overflow-hidden" : "overflow-auto"}
        `}
        ref={container}
      >
        <Offcanvas
          options={offcanvasOptions}
          preselected={preselected}
          onClose={close}
          isOpen={isOpen}
        />

        <article
          className={`
            duration-700 relative transition-all z-10
            ${isOpen ? "blur" : ""}
          `}
        >
          <HomeIntro
            onStartProjectClicked={startProjectClicked}
            onMenuClicked={() => {
              setPreselected(undefined);
              open();
            }}
          />
          <WeCan onStartProjectClick={startProjectClicked} />
          <GoodProject onStartProjectClick={startProjectClicked} />
          <OurServices onServiceClick={startProjectClicked} />
          <Customers />
          <TwoBrothers onStartProjectClick={startProjectClicked} />
          <OurImpact />
          <ClientComms />
          <Footer onOptionClick={clickOpenOption} />
        </article>
      </main>
    </CommonRouteWrapper>
  );
}
