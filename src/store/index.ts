import create from "zustand";
import { INITIAL_STATE } from "./initialState";
import { StateProps } from "./store.types";
import callApi from "../service/callApi";

const useStore = create<StateProps>(set => ({
  ...INITIAL_STATE,
  clearState: () => {
    set({ ...INITIAL_STATE });
  },
  onSubmit: async (search: string) => {
    set({ showSpinner: true });

    try {
      const { categories, items } = await callApi(`/items?q=${search}`);
      set({ showSpinner: false, items, categories, item: null });
    } catch {
      set({ isError: true, showSpinner: false });
    }
  },
  getProductDetail: async (id: string) => {
    set({ showSpinner: true, item: null });

    try {
      const { item } = await callApi(`/items/${id}`);
      set({ showSpinner: false, item });
    } catch {
      set({ isError: true, showSpinner: false });
    }
  },
}));

export default useStore;
