/* eslint-disable react/jsx-no-literals */

"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import RatingStars from "@/components/RatingStars";
import useTabStore from "../store/use-tab-store";

interface Props {
  score: number;
  reviews: number;
}

const ProductReviews: FC<Props> = ({ score, reviews }) => {
  const t = useTranslations("product");
  const { setTab } = useTabStore();

  return (
    <div className='flex items-center gap-0'>
      <RatingStars score={score} />
      <a
        href='#tabs'
        className='ms-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-primary'
        onClick={() => setTab("reviews")}
      >
        ({reviews} {t("reviews")})
      </a>
    </div>
  );
};

export default ProductReviews;
