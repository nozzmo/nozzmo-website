import useDelayedRemoveVariable from "~/hooks/useDelayedRemoveVariable";

interface GlobalAlert {
  message: string | null;
  timeout?: number;
}

const GlobalAlert = ({ message, timeout = 5000 }: GlobalAlert) => {
  const internalMessage = useDelayedRemoveVariable<string | null>(
    message,
    timeout
  );

  return internalMessage ? (
    <div
      className={`
        bg-black duration-500 fixed h-10 left-0 leading-10 px-4 right-0 text-center text-sm text-white top-0 transition-all z-50
        ${message ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
      `}
    >
      {internalMessage}
    </div>
  ) : null;
};

export default GlobalAlert;
