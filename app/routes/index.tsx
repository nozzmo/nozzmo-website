import { useMemo, useState, useEffect } from "react";
import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import GlobalAlert from "~/components/GlobalAlert";
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
import { useActionData, useLoaderData } from "@remix-run/react";
import useTemporalMessage from "~/hooks/useTemporalMessage";

export async function loader() {
  return json({ messageTimeout: process.env.DEFAULT_GLOBAL_MESSAGE_TIMEOUT });
}

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

  return "We have received your message. We will contact you soon.";
}

export default function Index() {
  const { messageTimeout } = useLoaderData<typeof loader>();
  const [preselected, setPreselected] = useState<number | undefined>(undefined);
  const { isOpen, close, open } = useCloseable(false);
  const actionData = useActionData<typeof action>();
  const msgTimeout = parseInt(messageTimeout as string);
  const {
    temporalMessage: globalMessage,
    setTemporalMessage: setGlobalMessage,
  } = useTemporalMessage(msgTimeout);

  useEffect(() => {
    console.log("ACTION DATA", actionData);
    if (actionData) {
      close();
      setGlobalMessage(actionData);
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
    <main className="h-screen overflow-auto snap-y snap-proximity">
      <GlobalAlert message={globalMessage} timeout={msgTimeout * 1.25} />
      <Offcanvas
        options={offcanvasOptions}
        preselected={preselected}
        onClose={close}
        isOpen={isOpen}
      />

      <article
        className={`
          duration-700 relative transition-all z-10
          ${globalMessage ? "pt-10" : ""}
          ${isOpen ? "blur" : ""}
        `}
      >
        <Intro
          onStartProjectClicked={startProjectClicked}
          onMenuClicked={() => {
            setPreselected(undefined);
            open();
          }}
        />
        <WeCan onStartProjectClick={startProjectClicked} />
        <OurServices onServiceClick={startProjectClicked} />
        <Customers />
        <TwoBrothers onStartProjectClick={startProjectClicked} />
        <OurImpact />
        <ClientComms />
        <Footer onOptionClick={clickOpenOption} />
      </article>
    </main>
  );
}
