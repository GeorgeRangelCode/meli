import { Item } from "../interfaces/global_interfaces";
import "../styles/components/Product.scss";

const Product = ({ id, picture, title, price, free_shipping, address }: Item) => {
  return (
    <div className="product-container">
      <div className="product-info" id={id}>
        <img src={picture} alt={title} />
        <div className="product-general-info">
          <p className="product-price">
            $ {Intl.NumberFormat("de-DE").format(price.amount)}
            {price.decimals && <span className="product-price-decimals">{price.decimals}</span>}
          </p>
          {free_shipping && <i className="product-price-free-shipping" />}

          <p>{title}</p>
        </div>
        <div className="product-location">
          <p>{address.state_name}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
