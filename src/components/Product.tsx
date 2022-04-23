import { Link } from "react-router-dom";
import { Item } from "../interfaces/global_interfaces";
import "../styles/components/Product.scss";

const Product = ({ id, picture, title, price, free_shipping, address }: Item) => {
  return (
    <div className="product-container">
      <Link to={`/items/${id}`}>
        <div className="product-info" id={id}>
          <img src={picture} alt={title} />
          <div className="product-general-info">
            <p className="product-price">
              $ {Intl.NumberFormat("de-DE").format(price.amount)}
              {price.decimals && <span className="product-price-decimals">{price.decimals}</span>}
            </p>
            {free_shipping && <i className="product-price-free-shipping" />}

            <p className="product-title">{title}</p>
          </div>
          <div className="product-location">
            <p>{address.state_name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
