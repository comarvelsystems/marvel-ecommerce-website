import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from "@/apis/categoryApi";

const useFetchCategories = (page: number, limit: number = 16) => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["categories", page],
    queryFn: async () => getCategoriesApi(page, limit),
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
