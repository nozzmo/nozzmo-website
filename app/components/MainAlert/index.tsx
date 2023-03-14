interface MainAlertProps {
  title: string;
}

export const MainAlert = ({ title }: MainAlertProps) => (
  <div className="bg-white-400 fixed left-0 px-8 py-2 text-sm text-center top-0 w-full">
    {title}
  </div>
);

export default function () {
  return (
    <MainAlert title="Start a project with Nozzmo today and get a 10% discount!" />
  );
}
