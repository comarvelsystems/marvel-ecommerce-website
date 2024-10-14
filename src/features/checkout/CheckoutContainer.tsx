import CheckoutPayment from "./checkout-pay/CheckoutPayment";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutOrderList from "./CheckoutOrderList";

const CheckoutContainer = () => {
  return (
    <div className='flex w-full flex-col gap-y-8 overflow-hidden lg:flex-1'>
      <CheckoutAddress />
      <CheckoutOrderList />
      <CheckoutPayment />
    </div>
  );
};

export default CheckoutContainer;
