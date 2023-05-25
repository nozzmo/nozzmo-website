import content from "~/content/customers";
import { H2 } from "~/components/Typography";
import ContentLimiter from "~/components/ContentLimiter";
import Customer, { CustomerProps } from "./Customer";
import useIsVisible from "~/hooks/useIsVisible";

interface CustomersProps {
  title: string;
  customers: Omit<CustomerProps, "turn" | "isVisible">[];
}

const Customers = ({ title, customers }: CustomersProps) => {
  const { isVisibleRef, isVisible } = useIsVisible<HTMLDivElement>();
  return (
    <section className="bg-black h-screen pb-16 pt-12 md:pb-22 md:pt-18 md:snap-start lg:pb-44 lg:pt-32">
      <ContentLimiter className="h-full">
        <div
          ref={isVisibleRef}
          className="flex flex-col h-full justify-center lg:px-6"
        >
          <H2
            title={title}
            className="appearing appearing-turn-1 max-w-4xl mx-auto text-center text-white"
            data-is-visible={isVisible}
          />
          <div className="mt-12 text-center lg:mt-20">
            {customers.map((customer, turn) => (
              <Customer
                key={customer.name}
                {...customer}
                isVisible={isVisible}
                turn={turn + 1}
              />
            ))}
          </div>
        </div>
      </ContentLimiter>
    </section>
  );
};

export default function () {
  return <Customers {...content} />;
}
