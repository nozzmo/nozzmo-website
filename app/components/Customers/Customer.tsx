export interface CustomerProps {
  name: string;
  logo: string;
}

const Customer = ({ name, logo }: CustomerProps) => (
  <img
    className="align-middle w-40 inline-block mb-2 mx-2 md:mb-4 md:mx-4 lg:mb-6 lg:mx-6"
    src={logo}
    alt={name}
  />
);

export default Customer;
