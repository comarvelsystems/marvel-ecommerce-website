import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductsForCategoryApi } from "@/apis/productApi";
import { ProductList } from "@/utils/@types";

interface Params {
  categoryName: string;
  categoryId: number;
  limit?: number;
  sort?: string;
}

const useProductsForCategory = ({
  categoryName,
  categoryId,
  limit,
  sort,
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
    queryKey: ["products", category],
    queryFn: async ({ pageParam }) =>
      getProductsForCategoryApi({
        categoryId,
        page: pageParam,
        perPage: limit,
        sort,
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

export default useProductsForCategory;