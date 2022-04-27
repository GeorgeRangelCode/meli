import { render } from "@testing-library/react";
import Spinner from "../../components/Spinner";
import { MemoryRouter as Router } from "react-router-dom";

describe("<Search />", () => {
  const { container } = render(
    <Router>
      <Spinner />
    </Router>,
  );

  it("render Spinner component", () => {
    expect(container).toBeInTheDocument();
  });
});
