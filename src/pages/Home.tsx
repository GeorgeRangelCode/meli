import ListItems from "../components/ListItems";
import useStore from "../store";
import "../styles/pages/Home.scss";

const Home = () => {
  const showSpinner = useStore(state => state.showSpinner);

  return <div className="home">{!showSpinner && <ListItems />}</div>;
};

export default Home;
