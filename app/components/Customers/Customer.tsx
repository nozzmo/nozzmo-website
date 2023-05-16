export interface CustomerProps {
  name: string;
  logo: string;
  turn: number;
  isVisible: boolean;
}

const Customer = ({ name, logo, turn, isVisible }: CustomerProps) => (
  <img
    className={`appearing appearing-turn-${turn} align-middle w-40 inline-block mb-2 mx-2 md:mb-4 md:mx-4 lg:mb-6 lg:mx-6`}
    data-is-visible={isVisible}
    src={logo}
    alt={name}
  />
);

export default Customer;
