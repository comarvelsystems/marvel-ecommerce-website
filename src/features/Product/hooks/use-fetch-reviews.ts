import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { ReviewList } from "@/utils/@types";
import { getReviewsApi } from "../api";

export interface FetchReviewsParams {
  productId: number;
  limit: number;
  searchQuery: string;
  sortby: string;
}

const useFetchReviews = ({
  productId,
  limit = 2,
  searchQuery,
  sortby,
}: FetchReviewsParams) => {
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
    queryKey: ["reviews", `${productId}${searchQuery}${sortby}`],
    queryFn: async ({ pageParam }) =>
      getReviewsApi({
        page: pageParam,
        productId,
        perPage: limit,
        search: searchQuery,
        sort: sortby,
      }),
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
