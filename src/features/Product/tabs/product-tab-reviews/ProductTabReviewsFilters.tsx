import Heading from "@/components/Heading";
import ProductTabReviewsSearchForm from "./ProductTabReviewsSearchForm";
import ProductTabReviewsSortForm from "./ProductTabReviewsSortForm";
import ProductTabReviewsResetFilters from "./ProductTabReviewsResetFilters";

const ProductTabReviewsFilters = () => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-4 md:flex-nowrap'>
      <Heading as='h6' className='flex-shrink-0'>
        32 Reviews
      </Heading>

      <div className='flex w-full flex-wrap items-center gap-3 md:w-auto'>
        <ProductTabReviewsSearchForm />
        <ProductTabReviewsSortForm />
        <ProductTabReviewsResetFilters />
      </div>
    </div>
  );
};

export default ProductTabReviewsFilters;
