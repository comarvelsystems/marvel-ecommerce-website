import Heading from "@/components/Heading";
import OrdersTabs from "./OrdersTabs";
import OrdersFilter from "./OrdersFilter";

const OrdersContainer = () => {
  return (
    <section className='space-y-8'>
      <header className='space-between flex flex-wrap gap-5 sm:flex-nowrap'>
        <div className='flex-1 space-y-1.5'>
          <Heading as='h1' className='!text-3xl'>
            Orders
          </Heading>
          <p className='text-base text-muted-foreground'>
            View the delivery status for items and your order history
          </p>
        </div>
      </header>
      <div>
        <OrdersFilter />
        <OrdersTabs />
      </div>
    </section>
  );
};

export default OrdersContainer;
