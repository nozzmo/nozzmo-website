import type { ActionArgs } from "@remix-run/node";

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

export async function loader() {
  return await commonLoader();
}

export async function action(args: ActionArgs) {
  return await commonAction(args);
}

export default function Hiring() {
  return (
    <CommonRouteWrapper reverseNotification>
      <main className="h-screen overflow-auto snap-y snap-proximity">
        <article>
          <HiringIntro />
          <WeAssess onStartProjectClick={() => null} />
          <HowCanWeHelpYou />
          <Engagements />
          <OurProcess />
          <Discover onStartProjectClick={() => null} />
          <FreeConsultation onStartProjectClick={() => null} />
          <OurTeam />
          <HiringFooter onStartProjectClick={() => null} />
        </article>
      </main>
    </CommonRouteWrapper>
  );
}
