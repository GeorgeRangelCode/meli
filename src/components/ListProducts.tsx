import Breadcrumb from "./Breadcrumb";
import useStore from "../store";
import Product from "./Product";

const ListProducts = () => {
  const items = useStore(state => state.items);

  return (
    <div>
      <Breadcrumb />
      {items.map(item => (
        <Product
          key={item.id}
          id={item.id}
          title={item.title}
          amount={item.price.amount}
          decimals={item.price.decimals}
          picture={item.picture}
          condition={item.condition}
          state_name={item.address.state_name}
          free_shipping={item.free_shipping}
        />
      ))}
    </div>
  );
};

export default ListProducts;
