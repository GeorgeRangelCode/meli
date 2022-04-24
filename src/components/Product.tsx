import { Link } from "react-router-dom";
import "../styles/components/Product.scss";

interface ProductProps {
  id: string;
  title: string;
  amount: number;
  decimals?: number;
  picture: string;
  condition: string;
  state_name: string;
  free_shipping: boolean;
}

const Product = ({ id, picture, title, amount, decimals, free_shipping, state_name }: ProductProps) => {
  return (
    <div className="product-container">
      <Link to={`/items/${id}`}>
        <div className="product-info" id={id}>
          <img src={picture} alt={title} />
          <div className="product-general-info">
            <p className="product-price">
              $ {Intl.NumberFormat("de-DE").format(amount)}
              {decimals && <span className="product-price-decimals">{decimals}</span>}
            </p>
            {free_shipping && <i className="product-price-free-shipping" />}

            <p className="product-title">{title}</p>
          </div>
          <div className="product-location">
            <p>{state_name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
