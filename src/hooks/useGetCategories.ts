import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/apis/categoryApi";

const useGetCategories = (page: number, limit: number = 16) => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["categories", page],
    queryFn: async () => getCategories(page, limit),
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

export default useGetCategories;
