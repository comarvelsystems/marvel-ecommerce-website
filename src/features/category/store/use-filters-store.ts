import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type Key = "subCategories" | "brands" | "price";

interface State {
  isExist: boolean;
  filters: {
    subCategories: string[];
    brands: string[];
    price: string;
  };
  setFilters: (key: Key, filterItem: string) => void;
  deleteFiler: (key: Key, filterItem: string) => void;
  deleteFilters: () => void;
  deleteAllSingleFilter: (key: Key) => void;
  setIsExist: () => void;
}

const useFiltersStore = create<State>()(
  subscribeWithSelector(set => ({
    isExist: false,
    filters: {
      subCategories: [],
      brands: [],
      price: "",
    },

    setFilters: (key: Key, filterItem: string) =>
      set(state => ({
        filters: {
          ...state.filters,
          [key]:
            key === "price" ? filterItem : [...state.filters[key], filterItem],
        },
      })),

    deleteFiler: (key: Key, filterItem: string) =>
      set(state => ({
        filters: {
          ...state.filters,
          [key]:
            key === "price"
              ? ""
              : state.filters[key].filter(item => item !== filterItem),
        },
      })),

    deleteAllSingleFilter: (key: Key) =>
      set(state => ({
        filters: {
          ...state.filters,
          [key]: key === "price" ? "" : [],
        },
      })),

    deleteFilters: () =>
      set({
        filters: {
          subCategories: [],
          brands: [],
          price: "",
        },
      }),

    setIsExist: () =>
      set(state => ({
        isExist:
          state.filters.brands.length > 0 ||
          state.filters.subCategories.length > 0 ||
          state.filters.price !== "",
      })),
  })),
);

useFiltersStore.subscribe(
  state => state.filters,
  () => {
    useFiltersStore.getState().setIsExist();
  },
);

export default useFiltersStore;
