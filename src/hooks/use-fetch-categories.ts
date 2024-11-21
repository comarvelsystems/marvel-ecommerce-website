import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { getCategoriesApi } from "@/apis/categoryApi";
import { Categories } from "@/utils/@types";

const useFetchCategories = (limit: number = 16) => {
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
    queryKey: ["categories"],
    queryFn: async ({ pageParam }) => getCategoriesApi(pageParam, limit),
    staleTime: ms("1h"),
    initialPageParam: 1,
    getNextPageParam: (data: Categories | undefined) => {
      const { total_pages, next_page } =
        data?.pagination as Categories["pagination"];
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

export default useFetchCategories;
