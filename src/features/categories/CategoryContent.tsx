"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useFetchCategories from "@/hooks/useFetchCategories";
import {
  Empty,
  CategoriesSkeleton,
  PageInfo,
  LoadMoreButton,
} from "@/components";
import CategoryList from "./CategoryList";
import useInfinite from "@/hooks/useInfinite";

const CategoryContent = () => {
  const queryClient = useQueryClient();

  const {
    isFetching,
    isRefetching,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
    pages,
    count,
    totalRecords,
    isNotEmpty,
  } = useInfinite({
    handler: useFetchCategories,
    limit: 8,
    listName: "categories",
  });

  useEffect(() => {
    if (isRefetching) {
      queryClient.resetQueries({
        queryKey: ["categories"],
      });
    }
  }, [isRefetching, queryClient]);

  if (isLoading || isRefetching) {
    return <CategoriesSkeleton />;
  }

  return (
    <>
      {!isLoading && !isRefetching && isNotEmpty ? (
        <CategoryList pages={pages} />
      ) : (
        <Empty />
      )}

      {isNotEmpty && (
        <PageInfo count={count} totalRecords={totalRecords}>
          <LoadMoreButton
            isFetching={isFetching}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            handler={fetchNextPage}
          />
        </PageInfo>
      )}
    </>
  );
};

export default CategoryContent;
