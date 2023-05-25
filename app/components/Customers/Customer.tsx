export interface CustomerProps {
  name: string;
  logo: string;
  turn: number;
  isVisible: boolean;
}

const Customer = ({ name, logo, turn, isVisible }: CustomerProps) => (
  <img
    className={`appearing appearing-turn-${turn} align-middle h-12 inline-block mb-4 mx-4`}
    data-is-visible={isVisible}
    src={logo}
    alt={name}
  />
);

export default Customer;
