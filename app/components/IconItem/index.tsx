import { H3, P } from "~/components/Typography";

export interface IconItemProps {
  icon: string;
  title: string;
  description: string;
}

const IconItem = ({ icon, title, description }: IconItemProps) => {
  return (
    <div className="border border-white/20 duration-500 group px-16 py-20 relative transition hover:bg-[#d9d9d9]">
      <div className="max-w-md mx-auto">
        <H3
          title={title}
          className="duration-300 transition group-hover:text-black"
        />
        <P text={description} className="text-black" />
      </div>

      <div
        className={`absolute bg-white bottom-8 duration-300 h-[55px] right-8 transition w-[55px] lg:bottom-16 lg:right-16 group-hover:bg-black`}
        style={{
          mask: `url(${icon}) no-repeat center`,
          WebkitMask: `url(${icon}) no-repeat center`,
        }}
      />
    </div>
  );
};

export default IconItem;
