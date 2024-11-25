import { PRODUCT_TABS } from "@/utils/constants";
import ProductTabsItem from "./product-tabs-item";

const ProductTabsList = () => {
  return (
    <ul className='flex flex-shrink-0 flex-grow-0 basis-full flex-row flex-wrap gap-3 sm:flex-nowrap lg:sticky lg:top-8 lg:basis-2/6 lg:flex-col lg:gap-8'>
      {PRODUCT_TABS.map(tab => (
        <ProductTabsItem key={tab.id} {...tab} />
      ))}
    </ul>
  );
};

export default ProductTabsList;
