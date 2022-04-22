import { Item } from "../interfaces/global_interfaces";

export type StateProps = {
  isError: boolean;
  items: Item[];
  categories: string[];
  showSpinner: boolean;
  clearState: () => void;
  onSubmit: (search: string) => Promise<void>;
};
