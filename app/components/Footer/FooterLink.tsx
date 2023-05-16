interface FooterLinkProps {
  title: string;
  onClick: () => void;
  turn: number;
  isVisible: boolean;
}

const FooterLink = ({ title, onClick, turn, isVisible }: FooterLinkProps) => (
  <button
    className={`appearing appearing-turn-${turn} bg-non font-light mb-6 text-left outline-none text-xl underline last:mb-0 md:text-2xl lg:text-3xl`}
    onClick={onClick}
    data-is-visible={isVisible}
  >
    {title}
  </button>
);

export default FooterLink;
