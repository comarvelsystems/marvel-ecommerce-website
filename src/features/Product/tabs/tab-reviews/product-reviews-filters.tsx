import { useTranslations } from "next-intl";
import Heading from "@/components/Heading";
import ProductReviewsSearch from "./product-reviews-search";
import ProductReviewsSort from "./product-reviews-sort";
import ProductReviewsResetFilters from "./product-reviews-reset-filters";
import useProductStore from "../../store/use-product-store";

const ProductReviewsFilters = () => {
  const t = useTranslations("globals");
  const count = useProductStore(state => state.ratingsCount);

  return (
    <div className='flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-4 md:flex-nowrap'>
      <Heading as='h6' className='flex-shrink-0'>
        {count} {t("reviews")}
      </Heading>

      <div className='flex w-full flex-wrap items-center gap-3 md:w-auto'>
        <ProductReviewsSearch />
        <ProductReviewsSort />
        <ProductReviewsResetFilters />
      </div>
    </div>
  );
};

export default ProductReviewsFilters;
