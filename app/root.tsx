import stylesheet from "~/tailwind.css";

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import fav16 from "~/assets/images/favicon16x16.png";
import fav32 from "~/assets/images/favicon32x32.png";
import fav96 from "~/assets/images/favicon96x96.png";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Nozzmo",
  viewport: "width=device-width,initial-scale=1",
  description: "We create world-class digital products.",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-black">
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
