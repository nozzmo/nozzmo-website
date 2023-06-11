import { H3, P } from "~/components/Typography";

export interface IconItemProps {
  icon: string;
  title: string;
  description: string;
}

const IconItem = ({ icon, title, description }: IconItemProps) => {
  return (
    <div className="bg-[#d9d9d9] border border-black/10 duration-500 group px-16 py-20 relative transition lg:bg-black lg:border-white/20 lg:hover:bg-[#d9d9d9]">
      <div className="max-w-md mx-auto">
        <H3
          title={title}
          className="duration-300 text-black transition lg:text-white lg:group-hover:text-black"
        />
        <P text={description} className="text-black" />
      </div>

      <div
        className={`absolute bg-black bottom-8 duration-300 h-[55px] right-8 transition w-[55px] lg:bg-white lg:group-hover:bg-black lg:bottom-16 lg:right-16`}
        style={{
          mask: `url(${icon}) no-repeat center`,
          WebkitMask: `url(${icon}) no-repeat center`,
        }}
      />
    </div>
  );
};

export default IconItem;
