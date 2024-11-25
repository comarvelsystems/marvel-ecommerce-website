import ProductDetailsSkeleton from "./product-details-skeleton";
import ProductTabsSkeleton from "./product-tabs-skeleton";
import SidebarLeftSkeleton from "./sidebar-left-skeleton";
import SliderSkeleton from "./slider-skeleton";

const ProductSkeleton = () => {
  return (
    <div className='space-y-8'>
      <div className='xl:space-y-8'>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <div className='flex flex-col gap-8 lg:flex-[70%] lg:flex-shrink-0 lg:flex-grow-0 lg:flex-row'>
            <SliderSkeleton />
            <ProductDetailsSkeleton />
          </div>
          <SidebarLeftSkeleton />
        </div>
        <ProductTabsSkeleton />
        {/* <RelatedProduct /> */}
      </div>
    </div>
  );
};

export default ProductSkeleton;
