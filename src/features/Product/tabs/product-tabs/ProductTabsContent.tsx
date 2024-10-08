"use client";

import ProductTabsDetails from "../ProductTabsDetails";
import ProductTabsFeatures from "../ProductTabsFeatures";
import ProductTabsReviews from "../product-tab-reviews/ProductTabsReviews";
import useTab from "./useTabStore";

const ProductTabsContent = () => {
  const { tab } = useTab();

  return (
    <div className='basis-full lg:basis-4/6'>
      {tab === "details" && <ProductTabsDetails />}
      {tab === "features" && <ProductTabsFeatures />}
      {tab === "reviews" && <ProductTabsReviews />}
    </div>
  );
};

export default ProductTabsContent;
