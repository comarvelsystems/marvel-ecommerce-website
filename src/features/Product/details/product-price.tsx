/* eslint-disable react/jsx-no-literals */

"use client";

import { useTranslations } from "next-intl";
import parsePrice from "@/lib/parse-price";
import { cn } from "@/lib/utils";
import useProductStore from "../store/use-product-store";

const ProductPrice = () => {
  const t = useTranslations("globals");
  const price = useProductStore(state => state.product.price);
  const special = useProductStore(state => state.product.special);

  const originalPrice = parsePrice(price);
  const specialPrice = parsePrice(special!);
  const discountPercentage =
    ((originalPrice - specialPrice) / originalPrice) * 100;

  return (
    <div className='relative flex items-center gap-4'>
      {special && <span className='block text-3xl font-bold'>{special}</span>}
      <div>
        {special && (
          <span className='block text-sm font-semibold text-red-600'>
            {discountPercentage.toFixed()}% {t("off")}
          </span>
        )}
        <span
          className={cn(
            {
              "text-lg font-semibold text-muted-foreground/60 line-through":
                special,
              "text-3xl font-bold": !special,
            },
            "block",
          )}
        >
          {price}
        </span>
      </div>
    </div>
  );
};

export default ProductPrice;
