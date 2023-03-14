import { useMemo, useState } from "react";

import Intro from "~/components/Intro";
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

export default function Index() {
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
    <main>
      {isOpen && (
        <Offcanvas
          options={offcanvasOptions}
          preselected={preselected}
          onClose={() => {
            setPreselected(undefined);
            close();
          }}
        />
      )}

      <article>
        <Intro
          onStartProjectClicked={startProjectClicked}
          onMenuClicked={open}
        />
        <WeCan onStartProjectClick={startProjectClicked} />
        <OurServices />
        <Customers />
        <TwoBrothers onStartProjectClick={startProjectClicked} />
        <OurImpact />
        <ClientComms />
        <Footer onOptionClick={clickOpenOption} />
      </article>
    </main>
  );
}
