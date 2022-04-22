import useStore from "../store";
import "../styles/components/Breadcrumb.scss";

const Breadcrumb = () => {
  const categories = useStore(state => state.categories);

  return (
    <ul className="breadcrumb">
      {categories.map((category, index) => (
        <li className="breadcrumb--item" key={category}>
          {category}
          {index !== categories.length - 1 && <i />}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
