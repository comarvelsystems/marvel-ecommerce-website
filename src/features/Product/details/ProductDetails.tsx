import InStock from "@/components/InStock";
import ProductDetailsTitle from "./ProductDetailsTitle";
import ProductDetailsOptions from "./ProductDetailsOptions";
import ProductDetailsReviews from "./ProductDetailsReviews";
import ProductDetailsPrice from "./ProductDetailsPrice";
import ProductDetailsColors from "./ProductDetailsColors";
import ProductDetailsSizes from "./ProductDetailsSizes";
import ProductDetailsActions from "./ProductDetailsActions";

const ProductDetails = () => {
  return (
    <div className='space-y-6'>
      <ProductDetailsTitle />
      <ProductDetailsOptions />
      <ProductDetailsReviews />
      <InStock />
      <ProductDetailsPrice />
      <ProductDetailsColors />
      <ProductDetailsSizes />
      <ProductDetailsActions />
    </div>
  );
};

export default ProductDetails;
