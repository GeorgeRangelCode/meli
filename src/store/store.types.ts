import { Items } from "../interfaces/global_interfaces";

export type StateProps = {
  isError: boolean;
  items: Items[];
  showSpinner: boolean;
  clearState: () => void;
  onSubmit: (search: string) => Promise<void>;
};
