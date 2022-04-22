import Breadcrumb from "./Breadcrumb";
import useStore from "../store";
import Product from "./Product";
import "../styles/components/ListProducts.scss";

const ListProducts = () => {
  const items = useStore(state => state.items);

  return (
    <div className="list-products">
      <Breadcrumb />
      {items.map(item => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListProducts;
