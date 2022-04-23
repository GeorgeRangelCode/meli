import { Item, ItemDetail } from "../interfaces/global_interfaces";

export type StateProps = {
  isError: boolean;
  items: Item[];
  item: ItemDetail | null;
  categories: string[];
  showSpinner: boolean;
  clearState: () => void;
  onSubmit: (search: string) => Promise<void>;
  getProductDetail: (id: string) => Promise<void>;
};
