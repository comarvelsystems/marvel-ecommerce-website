import Heading from "./Heading";
import ProductSlider from "./products/ProductSlider";

const RelatedProduct = () => {
  return (
    <div className='space-y-8'>
      <header>
        <Heading as='h3'>Related Products</Heading>
      </header>
      <ProductSlider />
    </div>
  );
};

export default RelatedProduct;
