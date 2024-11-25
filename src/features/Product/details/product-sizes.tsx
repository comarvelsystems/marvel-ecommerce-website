/* eslint-disable react/jsx-no-literals */

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

// TODO: replace with real sizes
const SIZES = ["XS", "S", "M", "L", "XL"];

const ProductSizes = () => {
  const t = useTranslations("globals");
  const [size, setSize] = useState<string>(() => SIZES[SIZES.length - 1]);

  return (
    <div className='space-y-4'>
      <span className='block text-lg font-bold'>{t("size")}:</span>
      <ul className='flex items-center gap-2'>
        {SIZES.map((sizeName, index) => (
          <li
            key={index}
            className={cn(
              "flex size-12 cursor-pointer items-center justify-center rounded-md border border-border text-lg font-semibold text-muted-foreground hover:bg-muted",
              size === sizeName && "border-primary bg-primary/10 text-primary",
            )}
            onClick={() => setSize(sizeName)}
          >
            {sizeName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSizes;
