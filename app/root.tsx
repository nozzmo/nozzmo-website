import { useEffect } from "react";
import { json } from "@remix-run/node";
import type { LinksFunction, MetaFunction, ActionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useActionData,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";
import fav16 from "~/assets/images/favicon16x16.png";
import fav32 from "~/assets/images/favicon32x32.png";
import fav96 from "~/assets/images/favicon96x96.png";
import GlobalAlert from "~/components/GlobalAlert";
import useTemporalMessage from "~/hooks/useTemporalMessage";
import data from "~/content/general";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Nozzmo",
  viewport: "width=device-width,initial-scale=1",
  description: "We create world-class digital products.",
});

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

  return data.success;
}

export default function App() {
  const { messageTimeout } = useLoaderData<typeof loader>();
  const msgTimeout = parseInt(messageTimeout as string);
  const actionData = useActionData<typeof action>();

  const {
    temporalMessage: globalMessage,
    setTemporalMessage: setGlobalMessage,
  } = useTemporalMessage(msgTimeout);

  useEffect(() => {
    if (actionData) {
      close();
      setGlobalMessage(actionData);
    }
  }, [actionData]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-black">
        <GlobalAlert message={globalMessage} timeout={msgTimeout * 1.25} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Archivo&family=Manrope:wght@200;400;700&display=swap",
  },
  {
    rel: "icon",
    href: fav16,
    type: "image/png",
    sizes: "16x16",
  },
  {
    rel: "icon",
    href: fav32,
    type: "image/png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    href: fav96,
    type: "image/png",
    sizes: "96x96",
  },
];
