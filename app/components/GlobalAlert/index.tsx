import useDelayedRemoveVariable from "~/hooks/useDelayedRemoveVariable";

interface GlobalAlert {
  message: string | null;
  cta?: string;
  ctaHref?: string;
  timeout?: number;
  reversed?: boolean;
  floating?: boolean;
}

const GlobalAlert = ({
  message,
  timeout = 0,
  cta,
  ctaHref,
  reversed = false,
  floating = false,
}: GlobalAlert) => {
  const internalMessage = useDelayedRemoveVariable<string | null>(
    message,
    timeout
  );

  return internalMessage ? (
    <div
      className={`
        duration-500 leading-5 px-4 py-4 text-center text-sm transition-all z-50
        ${message ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
        ${reversed ? "bg-white text-black" : "bg-black text-white"}
        ${floating ? "fixed left-0 right-0 top-0" : ""}
      `}
    >
      {internalMessage}

      {cta && ctaHref && (
        <>
          {" "}
          <a className="font-bold no-underline" href={ctaHref}>
            {cta}
          </a>
        </>
      )}
    </div>
  ) : null;
};

export default GlobalAlert;
