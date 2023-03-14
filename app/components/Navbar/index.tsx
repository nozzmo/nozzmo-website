interface NavbarProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const Navbar = ({ left, right }: NavbarProps) => (
  <nav>
    <div
      className="flex justify-between items-center"
      style={{ minHeight: 46 }}
    >
      <div className="flex items-center justify-start">{left}</div>
      <div className="flex items-center justify-end">{right}</div>
    </div>
  </nav>
);

export default Navbar;
