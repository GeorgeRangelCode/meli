import { render, screen } from "@testing-library/react";
import Product from "../../components/Product";
import { MemoryRouter as Router } from "react-router-dom";

describe("<Product />", () => {
  const product = {
    id: "MLA1129818331",
    title: "Apple iPhone 11 (128 Gb)",
    price: {
      amount: 175696,
      decimals: 4,
    },
    picture: "http://http2.mlstatic.com/D_724631-MLA46114990506_052021-I.jpg",
    condition: "new",
    address: {
      state_name: "Santa Fe",
    },
    free_shipping: true,
  };

  render(
    <Router>
      <Product
        id={product.id}
        title={product.title}
        amount={product.price.amount}
        decimals={product.price.decimals}
        picture={product.picture}
        condition={product.condition}
        state_name={product.address.state_name}
        free_shipping={product.free_shipping}
      />
    </Router>,
  );

  it("render Product component", () => {
    expect(screen.getByText(/175.696/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
    expect(screen.getByText(/Santa Fe/i)).toBeInTheDocument();
    expect(screen.getByText(/Apple iPhone 11/i)).toBeInTheDocument();
  });
});
