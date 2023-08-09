import type { ActionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import generalContent from "~/content/general";
import WeAssess from "~/components/WeAssess";
import Engagements from "~/components/Engagements";
import Discover from "~/components/Discover";
import FreeConsultation from "~/components/FreeConsultation";
import HiringFooter from "~/components/HiringFooter";
import OurTeam from "~/components/OurTeam";
import HowCanWeHelpYou from "~/components/HowCanWeHelpYou";
import OurProcess from "~/components/OurProcess";
import HiringIntro from "~/components/HiringIntro";
import CommonRouteWrapper, {
  commonLoader,
  commonAction,
} from "~/components/CommonRouteWrapper";
import GlobalAlert from "~/components/GlobalAlert";

export async function loader() {
  return await commonLoader();
}

export async function action(args: ActionArgs) {
  return await commonAction(args);
}

export default function Hiring() {
  const { recruitingCTA } = useLoaderData<typeof commonLoader>();
  return (
    <CommonRouteWrapper reverseNotification>
      <GlobalAlert
        message={generalContent.recruitingGlobalMessage}
        cta={generalContent.recruitingGlobalCTA}
        ctaHref={recruitingCTA}
        reversed
      />
      <main>
        <article>
          <HiringIntro />
          <WeAssess anchorHref={recruitingCTA} />
          <HowCanWeHelpYou />
          <Discover anchorHref={recruitingCTA} />
          <Engagements />
          <OurProcess />
          <FreeConsultation anchorHref={recruitingCTA} />
          <OurTeam />
          <HiringFooter anchorHref={recruitingCTA} />
        </article>
      </main>
    </CommonRouteWrapper>
  );
}
