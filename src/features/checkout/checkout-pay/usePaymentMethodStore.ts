import { create } from "zustand";

interface Store {
  method: string;
  setMethod: (method: string) => void;
}

const usePaymentMethodStore = create<Store>()(set => ({
  method: "credit",
  setMethod: (method: string) => set({ method }),
}));

export default usePaymentMethodStore;
