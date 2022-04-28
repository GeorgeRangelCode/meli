import { render } from "@testing-library/react";
import App from "../../routes/App";

describe("<App />", () => {
  it("render App routes", async () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});
