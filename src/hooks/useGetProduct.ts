import { useEffect } from "react";
import useStore from "../store/index";
import { useParams } from "react-router-dom";

const useGetProduct = () => {
  let { id } = useParams();

  const getProductDetail = useStore(state => state.getProductDetail);

  useEffect(() => {
    if (id) {
      getProductDetail(id);
    }
  }, [id, getProductDetail]);
};

export default useGetProduct;
