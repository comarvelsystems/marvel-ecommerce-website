import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { ReviewList } from "@/utils/@types";
import { getReviewsApi } from "../api";

const useFetchReviews = (productId: number, limit: number = 16) => {
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
    queryKey: ["reviews", productId],
    queryFn: async ({ pageParam }) =>
      getReviewsApi({ page: pageParam, productId, perPage: limit }),
    staleTime: ms("1h"),
    initialPageParam: 1,
    getNextPageParam: (data: ReviewList | undefined) => {
      const { total_pages, next_page } =
        data?.pagination as ReviewList["pagination"];
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

export default useFetchReviews;
