import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductsForCategoryApi } from "@/apis/productApi";
import { ProductList } from "@/utils/@types";

interface Params {
  categoryName: string;
  categoryId: number;
  limit?: number;
  sort?: string;
  brandIds?: string;
  languageId?: number;
}

const useFetchCategoryProducts = ({
  categoryName,
  categoryId,
  limit,
  sort,
  brandIds,
  languageId = 1,
}: Params) => {
  const category = `${categoryName}-${categoryId}`;

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isRefetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["products", category, brandIds],
    queryFn: async ({ pageParam }) =>
      getProductsForCategoryApi({
        categoryId,
        page: pageParam,
        perPage: limit,
        sort,
        brandIds,
        languageId,
      }),
    initialPageParam: 1,
    getNextPageParam: (data: ProductList | undefined) => {
      const { total_pages, next_page } =
        data?.pagination as ProductList["pagination"];
      return next_page <= total_pages ? next_page : undefined;
    },
  });

  return {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isRefetching,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  };
};

export default useFetchCategoryProducts;
