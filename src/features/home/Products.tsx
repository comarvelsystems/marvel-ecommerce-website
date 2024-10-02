import Heading from "@/components/Heading";
import ProductSlider from "@/components/products/ProductSlider";

const Products = () => {
  return (
    <section className='s-padding'>
      <div className='s-container'>
        <div className='space-y-8'>
          <header>
            <Heading as='h3'>Popular Products</Heading>
          </header>
          <ProductSlider />
        </div>
      </div>
    </section>
  );
};

export default Products;
