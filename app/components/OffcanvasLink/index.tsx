interface OffcanvasLinkProps {
  onClick: () => void;
  title: string;
}

const OffcanvasLink = ({ onClick, title }: OffcanvasLinkProps) => (
  <button
    className="block border-black/30 border-b box-border duration-300 px-8 py-6 text-left transition-colors w-full first:border-t hover:bg-black hover:text-white sm:px-16 sm:text-lg md:px-24 md:py-7 md:text-xl lg:px-32 lg:text-2xl"
    onClick={onClick}
  >
    {title}
  </button>
);

export default OffcanvasLink;
