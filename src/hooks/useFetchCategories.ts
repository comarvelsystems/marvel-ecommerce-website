import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { getCategoriesApi } from "@/apis/categoryApi";

const useFetchCategories = (page: number, limit: number = 16) => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["categories", `page-${page}-limit-${limit}`],
    queryFn: async () => getCategoriesApi(page, limit),
    staleTime: ms("1h"),
  });

  return {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  };
};

export default useFetchCategories;
