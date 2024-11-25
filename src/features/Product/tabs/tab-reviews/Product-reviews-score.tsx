"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import ProductTabReviewsProgress from "./ProductTabReviewsProgress";
import RatingStars from "@/components/RatingStars";

interface Props {
  score: number;
  reviews: number;
}

const ProductReviewsScore: FC<Props> = ({ score, reviews }) => {
  const t = useTranslations("product.product-reviews");

  return (
    <div className='space-y-2'>
      {/* eslint-disable-next-line react/jsx-no-literals */}
      <span className='text-4xl font-bold'>4.6</span>
      <div className='flex items-center'>
        <RatingStars size={24} score={score} />
      </div>
      <p className='text-sm text-muted-foreground/80'>
        {t("rating-count", { count: reviews })}
      </p>
      <ProductTabReviewsProgress />
    </div>
  );
};

export default ProductReviewsScore;
