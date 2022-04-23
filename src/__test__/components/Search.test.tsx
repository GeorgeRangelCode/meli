import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../../components/Search";

import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("<Search />", () => {
  render(
    <Router>
      <Search />
    </Router>,
  );

  it("when a valid value is entered into the input field", () => {
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Bicicleta" } });
    expect(input).toHaveDisplayValue("Bicicleta");
  });
});
