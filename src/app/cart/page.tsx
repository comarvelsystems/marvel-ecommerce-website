import Heading from "@/components/Heading";
import CartList from "@/features/cart/CartList";
import CartItemSummary from "@/features/cart/CartItemSummary";

const CartPage = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <Heading as='h1' className='mb-8 !text-2xl'>
          Cart (3 Items)
        </Heading>
        <div className='flex flex-col items-start gap-y-5 lg:flex-row'>
          <CartList />
          <CartItemSummary />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
