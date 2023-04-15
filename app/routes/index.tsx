import { useMemo, useState, useEffect } from "react";
import type { ActionArgs } from "@remix-run/node";

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
import { useActionData } from "@remix-run/react";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  let body = "";
  for (const [key, value] of formData.entries()) {
    body += `${key}=${value}&`;
  }

  await fetch(`${request.url}form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  return null;
}

export default function Index() {
  const [preselected, setPreselected] = useState<number | undefined>(undefined);
  const { isOpen, close, open } = useCloseable(false);
  const actionData = useActionData<typeof action>();

  useEffect(() => {
    if (actionData) {
      close();
    }
  }, [actionData]);

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
