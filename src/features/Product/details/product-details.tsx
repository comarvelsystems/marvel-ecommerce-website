import { Heading } from "@/components";
import StockStatus from "@/components/stock";
import ProductInfo from "./product-info";
import ProductReviews from "./product-reviews";
import ProductPrice from "./product-price";
import ProductActions from "./product-actions";
import useProductStore from "../store/use-product-store";

const ProductDetails = () => {
  const name = useProductStore(state => state.product.name);
  const stockId = useProductStore(state => state.product.stock_status_id);
  const stockName = useProductStore(state => state.product.stock_status_name);

  return (
    <div className='space-y-6'>
      <Heading as='h1' className='!text-3xl'>
        {name}
      </Heading>
      <ProductInfo />
      <ProductReviews />
      <StockStatus id={stockId} name={stockName} />
      <ProductPrice />
      {/* <ProductColors />
      <ProductSizes /> */}
      <ProductActions />
    </div>
  );
};

export default ProductDetails;
