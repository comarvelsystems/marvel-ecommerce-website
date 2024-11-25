import { create } from "zustand";

interface Store {
  tab: string;
  setTab: (newTab: string) => void;
}

const useTabStore = create<Store>()(set => ({
  tab: "description",
  setTab: (newTab: string) => set(() => ({ tab: newTab })),
}));

export default useTabStore;
