import { create } from "zustand";

type Key = "subCategories" | "brands" | "price";

interface State {
  filters: {
    subCategories: string[];
    brands: string[];
    price: string;
  };
  setFilters: (key: Key, filterItem: string) => void;
  deleteFiler: (key: Key, filterItem: string) => void;
  deleteFilters: () => void;
  deleteAllSingleFilter: (key: Key) => void;
}

const useFiltersStore = create<State>(set => ({
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
}));

export default useFiltersStore;
