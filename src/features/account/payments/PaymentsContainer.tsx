import Heading from "@/components/Heading";
import PaymentsList from "./PaymentsList";
import PaymentsDefault from "./PaymentsDefault";

const PaymentsContainer = () => {
  return (
    <section className='space-y-8'>
      <header className='space-between flex flex-wrap gap-5 sm:flex-nowrap'>
        <div className='flex-1 space-y-1.5'>
          <Heading as='h1' className='!text-3xl'>
            Payments
          </Heading>
          <p className='text-base text-muted-foreground'>
            Manage your saved payments for fast and easy checkout
          </p>
        </div>
      </header>
      <PaymentsDefault />
      <PaymentsList />
    </section>
  );
};

export default PaymentsContainer;
