import { render, screen, act } from "@testing-library/react";
import ListProducts from "../../components/ListProducts";
import { MemoryRouter as Router } from "react-router-dom";
import useStore from "../../store";

beforeEach(() =>
  useStore.setState({
    items: [
      {
        id: "MLA1129818331",
        title: "Apple iPhone 11 (128 Gb) - (product)",
        price: {
          currency: "ARS",
          amount: 175696,
          decimals: 4,
        },
        picture: "http://http2.mlstatic.com/D_724631-MLA46114990506_052021-I.jpg",
        condition: "new",
        address: {
          state_id: "AR-S",
          state_name: "Santa Fe",
          city_id: "TUxBQ1JPUzg1Yjg3",
          city_name: "Rosario",
        },
        free_shipping: true,
      },
    ],
    categories: ["Deportes y Fitness", "Ciclismo", "Bicicletas"],
  }),
);

describe("<Product />", () => {
  it("render ListProducts component", async () => {
    render(
      <Router>
        <ListProducts />
      </Router>,
    );

    expect(screen.getByText(/175.696/i)).toBeInTheDocument();
    expect(screen.getByText(/Apple iPhone/i)).toBeInTheDocument();
    expect(screen.getByText(/Santa Fe/i)).toBeInTheDocument();
  });
});
