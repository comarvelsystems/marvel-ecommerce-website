import useProductStore from "../../store/use-product-store";
import ProductDescription from "../product-description";
import ProductSpecifications from "../product-specifications";
import ProductReviews from "../tab-reviews/product-reviews";
import ProductTabsList from "./product-tabs-list";
import useTabStore from "../../store/use-tab-store";

const ProductTabs = () => {
  const { tab } = useTabStore();
  const { product } = useProductStore();

  const { description, attributes } = product;

  const specifications = attributes?.filter(
    attr => attr.name !== "specifications",
  )[0];

  return (
    <div
      id='tabs'
      className='product-tabs flex flex-col gap-8 border-y border-border/40 py-6 lg:flex-row lg:items-start lg:py-8'
    >
      <ProductTabsList />
      <div className='basis-full self-stretch lg:basis-4/6'>
        {tab === "description" && (
          <ProductDescription description={description} />
        )}
        {tab === "specifications" && (
          <ProductSpecifications data={specifications} />
        )}
        {tab === "reviews" && <ProductReviews />}
      </div>
    </div>
  );
};

export default ProductTabs;
