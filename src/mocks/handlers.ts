import { BASE_URL } from "../constants";
import { rest } from "msw";

export const handlers = [
  rest.get(`${BASE_URL}/items`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        author: {
          name: "Jorge",
          lastname: "Rangel",
        },
        categories: ["Deportes y Fitness", "Ciclismo", "Bicicletas"],
        items: [
          {
            id: "MLA1101343629",
            title: "Bicicleta Nordic X1.0 By Slp R29 21v Disco + Suspension",
            price: {
              currency: "ARS",
              amount: 33649,
              decimals: null,
            },
            picture: "http://http2.mlstatic.com/D_867853-MLA47355614698_092021-O.jpg",
            condition: "new",
            address: {
              state_id: "AR-B",
              state_name: "Buenos Aires",
              city_id: "TUxBQ0xPTWMwNjk3",
              city_name: "Lomas de Zamora",
            },
            free_shipping: true,
          },
        ],
      }),
    );
  }),

  rest.get(`${BASE_URL}/items/MLA1101343629`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        author: {
          name: "Jorge",
          lastname: "Rangel",
        },
        item: {
          id: "MLA1101343629",
          title: "Bicicleta Nordic X1.0 By Slp R29 21v Disco + Suspension",
          price: {
            currency: "ARS",
            amount: 33649,
            decimals: null,
          },
          picture: "http://http2.mlstatic.com/D_867853-MLA47355614698_092021-I.jpg",
          condition: "new",
          free_shipping: true,
          sold_quantity: 174,
          description:
            "SOMOS GARIOTTI - MIOTODO\n\nMERCADO LIDER PLATINUM - LARGA TRAYECTORIA EN MERCADO LIBRE - COMPRE CON CONFIANZA\n\nBicicleta Mountain Bike Nordic X1.0 - Rodado 29.\n\n- CUADRO: MTB Nordic X1.0 Acero\n- CALCO AL AGUA BAJO BARNIZ\n- JUEGO DE DIRECCION INTEGRADO \n- TRANSMISION 21V\n- CAMBIO SENSAH REFORZADO TIPO SHIMANO \n- DESCARRILADOR INDEX 3V\n- MANIJAS INTEGRADAS TIPO SHIMANO\n- PALANCAS TRIPLE INDEX\n- PIÑON 7v\n- CAJA PEDALERA SELLADA CON BOLILLERO \n- HORQUILLA SUSPENSION SLP \n- FRENOS A DISCO SLP MECANICO \n- RUEDAS MTB SLP DOBLE PARED\n- CAMARA Y CUBIERTA R29 \n- STEN, FORMA Y PORTASILLA MTB SLP \n- PEDALES PLASTICO MTB SIN REFLECTOR.\n\n-Podes realizar preguntas todos los días en cualquier horario, Estamos Lomas de Zamora, Gran Buenos Aires, zona sur\n-aclaramos que las imágenes son a modo ilustrativo y en cada partida de fabricación pueden venir con variaciones de componentes.",
        },
      }),
    );
  }),
];
