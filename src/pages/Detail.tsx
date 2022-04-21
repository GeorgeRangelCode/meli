import { useParams } from "react-router-dom";

const Detail = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>Detail {id}</h1>
    </div>
  );
};

export default Detail;
