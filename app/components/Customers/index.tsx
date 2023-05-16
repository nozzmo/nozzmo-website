import content from "~/content/customers";
import { H2 } from "~/components/Typography";
import ContentLimiter from "~/components/ContentLimiter";
import Customer, { CustomerProps } from "./Customer";

interface CustomersProps {
  title: string;
  customers: CustomerProps[];
}

const Customers = ({ title, customers }: CustomersProps) => {
  return (
    <section className="flex flex-col bg-black pb-16 pt-12 md:justify-center md:h-screen md:pb-22 md:pt-18 md:snap-start lg:pb-44 lg:pt-32">
      <ContentLimiter className="lg:px-6">
        <H2
          title={title}
          className="max-w-4xl mx-auto text-center text-white"
        />
        <div className="mt-12 text-center lg:mt-20">
          {customers.map((customer) => (
            <Customer key={customer.name} {...customer} />
          ))}
        </div>
      </ContentLimiter>
    </section>
  );
};

export default function () {
  return <Customers {...content} />;
}
