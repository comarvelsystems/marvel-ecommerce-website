"use client";

import { useTranslations } from "next-intl";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import SortByFilter from "./filters/sort-by-filter";
import FilterSheet from "./filters/filter-sheet";

const MobileFilterSidebarButton = () => {
  const t = useTranslations("pages.category");

  return (
    <div className='flex items-center gap-2 sm:gap-3'>
      <FilterSheet>
        <Button className='gap-2 lg:hidden'>
          <Filter className='sm:size-[18px size-[14px]' />
          <span className='hidden md:block'>{t("product-filters")}</span>
        </Button>
      </FilterSheet>
      <SortByFilter />
    </div>
  );
};

export default MobileFilterSidebarButton;
