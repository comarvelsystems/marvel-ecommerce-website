import { useQuery } from "@tanstack/react-query";
import { getProductApi } from "../api";

const useFetchProduct = (productId: number, languageId?: number) => {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => getProductApi(productId, languageId),
  });

  return {
    data,
    isLoading,
    isFetching,
    error,
  };
};

export default useFetchProduct;
