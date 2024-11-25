import { Heading } from "@/components";
import StockStatus from "@/components/stock";
import ProductInfo from "./product-info";
import ProductReviews from "./product-reviews";
import ProductPrice from "./product-price";
import ProductActions from "./product-actions";
import useProductStore from "../store/use-product-store";

const ProductDetails = () => {
  const { product } = useProductStore();

  const {
    name,
    model,
    sku,
    rating,
    stock_status_id,
    stock_status_name,
    price,
    special,
    manufacturer_name,
    total_records: reviews,
  } = product;

  const productInfoList = [
    { name: "model", value: model },
    { name: "sku", value: sku },
    { name: "brand", value: manufacturer_name },
  ];

  const isSomeInfoValuesExist = productInfoList.some(info => info.value);

  return (
    <div className='space-y-6'>
      <Heading as='h1' className='!text-3xl'>
        {name}
      </Heading>

      {isSomeInfoValuesExist && (
        <ProductInfo productInfoList={productInfoList} />
      )}

      <ProductReviews score={rating} reviews={reviews} />
      <StockStatus id={stock_status_id} name={stock_status_name} />
      <ProductPrice price={price} special={special} />
      {/* <ProductColors />
      <ProductSizes /> */}
      <ProductActions />
    </div>
  );
};

export default ProductDetails;
