import ListProducts from "../components/ListProducts";
import useStore from "../store";
import "../styles/pages/Home.scss";

const Home = () => {
  const showSpinner = useStore(state => state.showSpinner);

  return <div className="home">{!showSpinner && <ListProducts />}</div>;
};

export default Home;
