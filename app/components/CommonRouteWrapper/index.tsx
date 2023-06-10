import { useEffect } from "react";
import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";

import data from "~/content/general";
import useTemporalMessage from "~/hooks/useTemporalMessage";
import GlobalAlert from "~/components/GlobalAlert";

export async function commonLoader() {
  return json({
    messageTimeout: process.env.DEFAULT_GLOBAL_MESSAGE_TIMEOUT,
    recruitingCTA: process.env.RECRUITING_CTA,
  });
}

export async function commonAction({ request }: ActionArgs) {
  const formData = await request.formData();
  let body = "";
  for (const [key, value] of formData.entries()) {
    body += `${key}=${value}&`;
  }

  const url = new URL(request.url);

  await fetch(`${url.origin}/form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  return data.success;
}

interface CommonRouteWrapperProps {
  children: React.ReactNode;
  onSuccess?: () => void;
  reverseNotification?: boolean;
}

const CommonRouteWrapper = ({
  children,
  onSuccess,
  reverseNotification = false,
}: CommonRouteWrapperProps) => {
  const { messageTimeout } = useLoaderData<typeof commonLoader>();
  const actionData = useActionData<typeof commonAction>();
  const msgTimeout = parseInt(messageTimeout as string);
  const {
    temporalMessage: globalMessage,
    setTemporalMessage: setGlobalMessage,
  } = useTemporalMessage(msgTimeout);

  useEffect(() => {
    if (actionData) {
      onSuccess && onSuccess();
      setGlobalMessage(actionData);
    }
  }, [actionData]);

  return (
    <>
      <GlobalAlert
        message={globalMessage}
        timeout={msgTimeout * 1.25}
        reversed={reverseNotification}
        floating
      />
      {children}
    </>
  );
};

export default CommonRouteWrapper;
