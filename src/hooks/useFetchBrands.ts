import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { BrandList } from "@/utils/@types";
import { getBrandsApi } from "@/apis/brandApi";

const useFetchBrands = (categoryId: number, limit: number = 16) => {
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
    queryKey: ["manufacturers", categoryId],
    queryFn: async ({ pageParam }) =>
      getBrandsApi({ categoryId, page: pageParam, perPage: limit }),
    initialPageParam: 1,
    staleTime: ms("1h"),
    getNextPageParam: (data: BrandList | undefined) => {
      const { total_pages, next_page } =
        data?.pagination as BrandList["pagination"];
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
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  };
};

export default useFetchBrands;
