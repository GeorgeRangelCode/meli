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
    console.log(search);
    set({ showSpinner: true });

    try {
      const items = await callApi("/items");
      set({ showSpinner: false, items });
    } catch {
      set({ isError: true, showSpinner: false });
    }
  },
}));

export default useStore;
