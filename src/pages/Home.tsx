import { Helmet } from "react-helmet";
import ListProducts from "../components/ListProducts";
import useStore from "../store";

const Home = () => {
  const showSpinner = useStore(state => state.showSpinner);

  return (
    <>
      <Helmet>
        <title>Meli - Articulos</title>
        <meta name="twitter:title" content="Meli" />
        <meta name="twitter:description" content="Meli - Articulos" />
        <meta property="og:title" content="Meli" />
        <meta property="og:description" content="Meli - Articulos" />
        <meta property="og:site_name" content="Meli" />
        <meta property="og:locale" content="es_ES" />
      </Helmet>
      <main className="page--container">{!showSpinner && <ListProducts />}</main>
    </>
  );
};

export default Home;
