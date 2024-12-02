"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useFilter from "@/hooks/use-filter";

const ProductReviewsSearch = () => {
  const t = useTranslations("globals");
  const { updateSearch, searchQuery } = useFilter();
  const [value, setValue] = useState(searchQuery);

  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const time = setTimeout(() => {
      updateSearch(value);
    }, 800);

    return () => {
      clearTimeout(time);
    };
  }, [updateSearch, value]);

  return (
    <div className='flex-grow md:flex-grow-0'>
      <div className='relative flex w-full items-center gap-2 md:w-60'>
        <Label className='sr-only'>{t("search")}</Label>
        <div className='relative'>
          <Input
            placeholder='Search In Reviews'
            className='!mt-0 indent-6'
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <Search
            size={16}
            className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground rtl:left-auto rtl:right-3'
          />
        </div>
      </div>
    </div>
  );
};

export default ProductReviewsSearch;
