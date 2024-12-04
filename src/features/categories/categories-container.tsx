"use client";

import useFetchCategories from "@/hooks/use-fetch-categories";
import {
  Empty,
  CategoriesSkeleton,
  PageInfo,
  LoadMoreButton,
} from "@/components";
import CategoryList from "./category-list";
import useInfinite from "@/hooks/use-infinite";
import { useLocale } from "next-intl";
import { Language } from "@/utils/enums";

const CategoriesContainer = () => {
  const locale = useLocale();
  const currentLang = locale.toUpperCase() as keyof typeof Language;

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
  } = useInfinite(
    useFetchCategories,
    "categories",
    undefined,
    8,
    Language[currentLang],
  );

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

export default CategoriesContainer;
