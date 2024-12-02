"use client";

import { useTranslations } from "next-intl";
import ProductReviewsProgress from "./product-reviews-progress";
import RatingStars from "@/components/RatingStars";
import useProductStore from "../../store/use-product-store";

const ProductReviewsScore = () => {
  const t = useTranslations("product.product-reviews");
  const score = useProductStore(state => state.product.rating);
  const count = useProductStore(state => state.ratingsCount);

  return (
    <div className='space-y-2'>
      <span className='text-4xl font-bold'>{score?.toFixed(1)}</span>
      <div className='flex items-center'>
        <RatingStars size={24} score={score} />
      </div>
      <p className='text-sm text-muted-foreground/80'>
        {t("rating-count", { count })}
      </p>
      <ProductReviewsProgress />
    </div>
  );
};

export default ProductReviewsScore;
