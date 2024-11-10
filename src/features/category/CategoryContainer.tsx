"use client";

import { FC } from "react";
import Heading from "@/components/Heading";
import useProductsForCategory from "./hooks/useProductsForCategory";
import { ProductList } from "@/utils/@types";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { LoadMoreButton } from "@/components";
import CategoryProducts from "./CategoryProducts";
import Filters from "./Filters";

interface Props {
  title: string;
  categoryId: number;
}

const CategoryContainer: FC<Props> = ({ title, categoryId }) => {
  const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useProductsForCategory({
      categoryId,
    });

  const pages = data?.pages ?? ([] as ProductList[]);

  useInfiniteScroll({ hasNextPage, fetchNextPage });

  return (
    <div className='space-y-5 p-0 lg:p-5'>
      <div className='flex w-full flex-row justify-between gap-5 sm:items-center lg:flex-1'>
        <Heading as='h4'>{title}</Heading>
        <Filters />
      </div>
      <CategoryProducts pages={pages} />
      <LoadMoreButton
        handler={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isFetching={isFetching}
      />
    </div>
  );
};

export default CategoryContainer;
