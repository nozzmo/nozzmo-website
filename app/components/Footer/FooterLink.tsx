interface FooterLinkProps {
  title: string;
  onClick: () => void;
  turn: number;
  isVisible: boolean;
}

const FooterLink = ({ title, onClick, turn, isVisible }: FooterLinkProps) => (
  <button
    className={`appearing appearing-turn-${turn} bg-non border-b border-b-white/50 font-light mb-8 pb-8 text-left text-white outline-none text-xl md:text-2xl lg:text-3xl last:border-b-transparent last:mb-0`}
    onClick={onClick}
    data-is-visible={isVisible}
  >
    {title}
  </button>
);

export default FooterLink;
