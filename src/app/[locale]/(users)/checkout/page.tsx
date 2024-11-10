import Heading from "@/components/Heading";
import CheckoutContainer from "@/features/checkout/CheckoutContainer";
import CheckoutSummary from "@/features/checkout/CheckoutSummary";

const CheckoutPage = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <Heading as='h1' className='mb-8 !text-2xl'>
          Checkout
        </Heading>
        <div className='flex flex-col items-start gap-y-5 lg:flex-row'>
          <CheckoutContainer />
          <CheckoutSummary />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
