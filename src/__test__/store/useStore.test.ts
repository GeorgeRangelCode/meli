import { act, renderHook } from "@testing-library/react-hooks";
import { cleanup } from "@testing-library/react";
import useStore from "../../store";

describe("useStore", () => {
  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  const { result } = renderHook(() => useStore(state => state));

  it("when there is state flow management", () => {
    expect(result.current.isError).toBe(false);
    expect(result.current.items).toEqual([]);
    expect(result.current.item).toBe(null);
    expect(result.current.categories).toEqual([]);
    expect(result.current.showSpinner).toBe(false);

    act(() => {
      result.current.onSubmit("play");
      console.log(result.current.showSpinner);
    });

    expect(result.current.showSpinner).toBe(true);

    act(() => {
      result.current.clearState();
    });

    act(() => {
      result.current.getProductDetail("MLA1129830215");
    });

    expect(result.current.showSpinner).toBe(true);
  });
});
