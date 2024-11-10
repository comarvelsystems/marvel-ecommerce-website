"use client";

import Heading from "@/components/Heading";
import Filters from "./Filters";
import CategoryProducts from "./CategoryProducts";
import useProductsForCategory from "./hooks/useProductsForCategory";

interface Props {
  title: string;
  categoryId: number;
}

const CategoryContainer: React.FC<Props> = ({ title, categoryId }) => {
  const { data } = useProductsForCategory({
    categoryId,
  });

  const products = data?.products ?? [];

  return (
    <div className='space-y-5 p-0 lg:p-5'>
      <div className='flex w-full flex-row justify-between gap-5 sm:items-center lg:flex-1'>
        <Heading as='h4'>{title}</Heading>
        <Filters />
      </div>
      <CategoryProducts products={products} />
    </div>
  );
};

export default CategoryContainer;
