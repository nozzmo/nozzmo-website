import type { ActionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import RecruitingSuccess from "~/components/RecruitingSuccess";
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
  const { recruitingCTA } = useLoaderData<typeof commonLoader>();
  return (
    <CommonRouteWrapper reverseNotification>
      <main>
        <article>
          <RecruitingSuccess anchorHref={recruitingCTA} />
        </article>
      </main>
    </CommonRouteWrapper>
  );
}
