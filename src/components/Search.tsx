import { Link } from "react-router-dom";
import logoMeli from "../assets/logoMeli.png";
import useSearch from "../hooks/useSearch";
import "../styles/components/Search.scss";

const Search = () => {
  const { handleSubmit, HandleSearch } = useSearch();
  return (
    <div className="search">
      <form className="search--form" onSubmit={handleSubmit}>
        <Link to="/">
          <img src={logoMeli} alt="Logo Meli" width="53" height="36" />
        </Link>
        <input className="search--input" type="text" placeholder="Nunca dejes de buscar" onChange={HandleSearch} />
        <button aria-label="Buscar Articulos" type="submit" className="search--button" />
      </form>
    </div>
  );
};

export default Search;
