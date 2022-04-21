import { createSearchParams, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate({
      pathname: "/",
      search: `?${createSearchParams({
        search: "bicicleta",
      })}`,
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Home;
