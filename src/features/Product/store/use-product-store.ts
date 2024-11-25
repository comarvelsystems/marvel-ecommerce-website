import { create } from "zustand";
import { ProductInfo } from "@/utils/@types";

interface State {
  product: ProductInfo;
  isLoading: boolean;
  isFetching: boolean;
  setProduct: (product: ProductInfo) => void;
  setLoading: (isLoading: boolean) => void;
  setFetching: (isFetching: boolean) => void;
}

const useProductStore = create<State>(set => ({
  product: {} as ProductInfo,
  isLoading: false,
  isFetching: false,

  setProduct: (product: ProductInfo) => set({ product }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setFetching: (isFetching: boolean) => set({ isFetching }),
}));

export default useProductStore;
