import { create } from "zustand";

interface Store {
  tab: string;
  setTab: (newTab: string) => void;
}

const useTab = create<Store>()(set => ({
  tab: "details",
  setTab: (newTab: string) => set(() => ({ tab: newTab })),
}));

export default useTab;
