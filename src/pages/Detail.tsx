import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb";
import Spinner from "../components/Spinner";
import useGetProduct from "../hooks/useGetProduct";
import useStore from "../store";
import "../styles/pages/Detail.scss";

const Detail = () => {
  const item = useStore(state => state.item);
  useGetProduct();

  return (
    <>
      <Helmet>
        <title>{item?.title}</title>
        <meta name="twitter:title" content={item?.title} />
        <meta name="twitter:description" content={item?.description} />
        <meta name="twitter:image" content={item?.picture} />
        <meta property="og:title" content={item?.title} />
        <meta property="og:description" content={item?.description} />
        <meta property="og:image" content={item?.picture} />
        <meta property="og:url" content="https://meli-sable.vercel.app/" />
        <meta property="og:site_name" content="Meli" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
      </Helmet>
      <main className="page--container">
        <div>
          <Breadcrumb />
          {!item ? (
            <Spinner />
          ) : (
            <div className="detail-container">
              <div className="detail-first-row">
                <div className="detail-img-container">
                  <img src={item.picture} alt={item.title} />
                </div>
                <div className="detail-info">
                  <p className="detail-condition-sold">
                    {`${item.condition === "new" ? "Nuevo" : "Usado"} - ${item.sold_quantity} vendidos`}
                  </p>
                  <h5 className="detail-title">{item.title}</h5>
                  <h3 className="detail-price">$ {Intl.NumberFormat("de-DE").format(item.price.amount)}</h3>
                  <button aria-label="Comprar Articulo" className="detail-buy">
                    Comprar
                  </button>
                </div>
              </div>
              <div className="detail-description">
                <p className="detail-description-title">Descripción del producto</p>
                <p className="detail-description-text">{item.description}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Detail;
