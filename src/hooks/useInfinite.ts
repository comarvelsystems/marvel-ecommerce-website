import { useMemo } from "react";

interface Params {
  handler: (limit: number) => any;
  limit: number;
  listName: string;
}

function useInfinite<T extends { [key: string]: any }>({
  handler,
  limit,
  listName,
}: Params) {
  const {
    data,
    isFetching,
    isRefetching,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = handler(limit);

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
