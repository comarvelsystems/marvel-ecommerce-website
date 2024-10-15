import Heading from "@/components/Heading";
import WishlistList from "@/features/wishlist/WishlistList";

const Wishlist = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='mb-8 space-y-1'>
          <Heading as='h1' className='!text-2xl'>
            Your Wishlist
          </Heading>
          <p className='font-medium text-muted-foreground'>
            There are <span className='font-bold text-primary'>3</span> products
            in this list
          </p>
        </div>
        <div className='flex flex-col items-start gap-y-5 lg:flex-row'>
          <WishlistList />
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
