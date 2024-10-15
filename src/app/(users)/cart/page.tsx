import Heading from "@/components/Heading";
import CartList from "@/features/cart/CartList";
import CartItemSummary from "@/features/cart/CartItemSummary";

const CartPage = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='mb-8 space-y-1'>
          <Heading as='h1' className='!text-2xl'>
            Your Cart
          </Heading>
          <p className='font-medium text-muted-foreground'>
            There are <span className='font-bold text-primary'>3</span> products
            in this list
          </p>
        </div>
        <div className='flex flex-col items-start gap-y-5 lg:flex-row'>
          <CartList />
          <CartItemSummary />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
