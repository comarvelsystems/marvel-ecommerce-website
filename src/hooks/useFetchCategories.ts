import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/apis/categoryApi";

type Page = number;
type Limit = number;

const useFetchCategories = (page: Page, limit: Limit = 16) => {
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

export default useFetchCategories;
