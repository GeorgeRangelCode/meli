import ListProducts from "../components/ListProducts";
import useStore from "../store";

const Home = () => {
  const showSpinner = useStore(state => state.showSpinner);

  return <main className="page--container">{!showSpinner && <ListProducts />}</main>;
};

export default Home;
