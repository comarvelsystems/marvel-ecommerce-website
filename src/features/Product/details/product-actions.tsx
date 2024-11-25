"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductActions = () => {
  const t = useTranslations("globals");
  const [count, setCount] = useState<number>(1);

  return (
    <div className='flex items-center gap-4'>
      <div className='flex items-center gap-4 rounded-md border border-border px-4'>
        <span className='block w-6 text-center text-lg font-bold'>{count}</span>
        <div>
          <div
            className='cursor-pointer rounded-sm p-1 text-muted-foreground hover:text-foreground'
            onClick={() => setCount(count + 1)}
          >
            <ChevronUp size={20} strokeWidth={2.5} />
          </div>
          <div
            className='cursor-pointer rounded-sm p-1 text-muted-foreground hover:text-foreground'
            onClick={() => setCount(count - 1)}
          >
            <ChevronDown size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>
      <Button size='lg' className='flex-grow select-none gap-x-3 py-7 text-lg'>
        <ShoppingCart />
        {t("add-cart")}
      </Button>
      <Button
        variant='outline'
        size='icon'
        className='size-14 flex-shrink-0 items-center justify-center'
      >
        <Heart />
      </Button>
    </div>
  );
};

export default ProductActions;
