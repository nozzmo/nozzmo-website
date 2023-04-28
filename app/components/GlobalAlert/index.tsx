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
    <div className="animate-appear bg-black fixed h-10 left-0 leading-10 px-4 right-0 text-center text-sm text-white top-0">
      {internalMessage}
    </div>
  ) : null;
};

export default GlobalAlert;
