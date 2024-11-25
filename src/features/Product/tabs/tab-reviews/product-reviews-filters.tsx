import { FC } from "react";
import { useTranslations } from "next-intl";
import Heading from "@/components/Heading";
import ProductTabReviewsSearchForm from "./ProductTabReviewsSearchForm";
import ProductTabReviewsSortForm from "./ProductTabReviewsSortForm";
import ProductTabReviewsResetFilters from "./ProductTabReviewsResetFilters";

interface Props {
  reviews: number;
}

const ProductReviewsFilters: FC<Props> = ({ reviews }) => {
  const t = useTranslations("globals");

  return (
    <div className='flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-4 md:flex-nowrap'>
      <Heading as='h6' className='flex-shrink-0'>
        {reviews} {t("reviews")}
      </Heading>

      <div className='flex w-full flex-wrap items-center gap-3 md:w-auto'>
        <ProductTabReviewsSearchForm />
        <ProductTabReviewsSortForm />
        <ProductTabReviewsResetFilters />
      </div>
    </div>
  );
};

export default ProductReviewsFilters;
