interface FooterLinkProps {
  title: string;
  onClick: () => void;
}

const FooterLink = ({ title, onClick }: FooterLinkProps) => (
  <button
    className="bg-non font-light mb-6 text-left outline-none text-xl underline last:mb-0 md:text-2xl lg:text-3xl"
    onClick={onClick}
  >
    {title}
  </button>
);

export default FooterLink;
