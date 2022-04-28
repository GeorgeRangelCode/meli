import { render, screen } from "@testing-library/react";
import NotFound from "../../pages/NotFound";
import { MemoryRouter as Router } from "react-router-dom";

describe("<NotFound />", () => {
  it("render NotFound page", async () => {
    render(
      <Router>
        <NotFound />
      </Router>,
    );
    expect(screen.getByText(/NotFound/i)).toBeInTheDocument();
  });
});
