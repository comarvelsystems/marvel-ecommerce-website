import { create } from "zustand";
import { ProductInfo } from "@/utils/@types";

interface State {
  product: ProductInfo;
  isLoading: boolean;
  isFetching: boolean;
  ratingsCount: number;
  setProduct: (product: ProductInfo) => void;
  setLoading: (isLoading: boolean) => void;
  setFetching: (isFetching: boolean) => void;
}

const useProductStore = create<State>(set => ({
  product: {} as ProductInfo,
  isLoading: false,
  isFetching: false,
  ratingsCount: 0,

  setProduct: (product: ProductInfo) =>
    set({
      product,
      ratingsCount: product.ratings_list?.reduce(
        (acc, item) => acc + item.count,
        0,
      ),
    }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setFetching: (isFetching: boolean) => set({ isFetching }),
}));

export default useProductStore;
