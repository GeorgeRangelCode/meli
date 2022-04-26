import { render, screen } from "@testing-library/react";
import Detail from "../../pages/Detail";
import { MemoryRouter as Router } from "react-router-dom";
import useStore from "../../store";

beforeEach(() =>
  useStore.setState({
    item: {
      id: "MLA1101343629",
      title: "Bicicleta Nordic X1.0 By Slp R29 21v Disco + Suspension",
      price: {
        currency: "ARS",
        amount: 33649,
        decimals: 4,
      },
      picture: "http://http2.mlstatic.com/D_867853-MLA47355614698_092021-I.jpg",
      condition: "new",
      free_shipping: true,
      sold_quantity: 174,
      description:
        "SOMOS GARIOTTI - MIOTODO\n\nMERCADO LIDER PLATINUM - LARGA TRAYECTORIA EN MERCADO LIBRE - COMPRE CON CONFIANZA\n\nBicicleta Mountain Bike Nordic X1.0 - Rodado 29.\n\n- CUADRO: MTB Nordic X1.0 Acero\n- CALCO AL AGUA BAJO BARNIZ\n- JUEGO DE DIRECCION INTEGRADO \n- TRANSMISION 21V\n- CAMBIO SENSAH REFORZADO TIPO SHIMANO \n- DESCARRILADOR INDEX 3V\n- MANIJAS INTEGRADAS TIPO SHIMANO\n- PALANCAS TRIPLE INDEX\n- PIÑON 7v\n- CAJA PEDALERA SELLADA CON BOLILLERO \n- HORQUILLA SUSPENSION SLP \n- FRENOS A DISCO SLP MECANICO \n- RUEDAS MTB SLP DOBLE PARED\n- CAMARA Y CUBIERTA R29 \n- STEN, FORMA Y PORTASILLA MTB SLP \n- PEDALES PLASTICO MTB SIN REFLECTOR.\n\n-Podes realizar preguntas todos los días en cualquier horario, Estamos Lomas de Zamora, Gran Buenos Aires, zona sur\n-aclaramos que las imágenes son a modo ilustrativo y en cada partida de fabricación pueden venir con variaciones de componentes.",
    },
    categories: ["Deportes y Fitness", "Ciclismo", "Bicicletas"],
  }),
);
describe("<Detail />", () => {
  it("render Detail page with item", async () => {
    render(
      <Router>
        <Detail />
      </Router>,
    );

    expect(screen.getByText(/Nuevo - 174 vendidos/i)).toBeInTheDocument();
    expect(screen.getByText(/33.649/i)).toBeInTheDocument();
    expect(screen.getByText(/Comprar/i)).toBeInTheDocument();
    expect(screen.getByText(/Descripción del producto/i)).toBeInTheDocument();
    expect(screen.getByText(/OMOS GARIOTTI - MIOTODO/i)).toBeInTheDocument();
  });
});
