/* eslint-disable react/jsx-no-literals */

"use client";

import { useTranslations } from "next-intl";
import RatingStars from "@/components/RatingStars";
import useTabStore from "../store/use-tab-store";
import useProductStore from "../store/use-product-store";

const ProductReviews = () => {
  const score = useProductStore(state => state.product.rating);
  const count = useProductStore(state => state.ratingsCount);

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
        ({count} {t("reviews")})
      </a>
    </div>
  );
};

export default ProductReviews;
