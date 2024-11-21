import React, { FC } from "react";
import { Heading } from "@/components";
import SortByFilter from "./filters/sort-by-filter";
import SelectedBrands from "./selected-brands";
import CategoryProducts from "./category-products";
import FilterContainer from "./filters/filter-container";
import CategoryHeader from "./category-header";

interface Props {
  pageTitle: string;
}

const CategoryContainer: FC<Props> = ({ pageTitle }) => {
  return (
    <div className='flex items-start'>
      <FilterContainer />
      <div className='w-full space-y-2 overflow-x-hidden p-0 lg:p-5'>
        <CategoryHeader>
          <Heading className='!text-4xl font-bold'>{pageTitle}</Heading>
        </CategoryHeader>
        <div className='flex items-center justify-between gap-4 sm:h-14 sm:gap-8'>
          <SelectedBrands />
          <div className='hidden sm:block'>
            <SortByFilter />
          </div>
        </div>
        <CategoryProducts />
      </div>
    </div>
  );
};

export default CategoryContainer;
