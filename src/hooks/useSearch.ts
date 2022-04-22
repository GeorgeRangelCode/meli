import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import useStore from "../store";

const useSearch = () => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");
  const onSubmit = useStore(state => state.onSubmit);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate({
      pathname: "/",
      search: `?${createSearchParams({
        search: valueSearch,
      })}`,
    });

    onSubmit(valueSearch);
  };

  const HandleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(event.target.value);
  };

  return {
    handleSubmit,
    HandleSearch,
  };
};

export default useSearch;
