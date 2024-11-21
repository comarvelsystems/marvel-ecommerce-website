import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

function useInfinite<T extends { [key: string]: any }>(
  handler: (...args: any[]) => any,
  listName: string,
  queryKeySecond?: number,
  ...args: any[]
) {
  const queryClient = useQueryClient();

  const {
    data,
    isFetching,
    isRefetching,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = handler(...args);

  const pages = useMemo(() => {
    return data?.pages ?? ([] as T[]);
  }, [data?.pages]);

  const count = useMemo(() => {
    return pages.reduce(
      (acc: any, page: any) => acc + Number(page?.[listName].length),
      0,
    );
  }, [listName, pages]);

  const totalRecords = Number(pages[0]?.total_records);
  const isNotEmpty = data && pages.length > 0 && totalRecords > 0;

  useEffect(() => {
    const queryKey = queryKeySecond ? [listName, queryKeySecond] : [listName];

    if (isRefetching) {
      queryClient.resetQueries({
        queryKey,
      });
    }
  }, [isRefetching, queryClient, listName, queryKeySecond]);

  return {
    data,
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
  };
}

export default useInfinite;
