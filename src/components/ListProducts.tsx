import Breadcrumb from "./Breadcrumb";
import useStore from "../store";
import Product from "./Product";

const ListProducts = () => {
  const items = useStore(state => state.items);

  return (
    <div>
      <Breadcrumb />
      {items.map(item => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListProducts;
