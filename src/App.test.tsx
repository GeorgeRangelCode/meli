import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders meli text", () => {
  render(<App />);
  const linkElement = screen.getByText(/meli/i);
  expect(linkElement).toBeInTheDocument();
});
