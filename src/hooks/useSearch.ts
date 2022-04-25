import { useState, useEffect } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import useStore from "../store";

const useSearch = () => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");
  const onSubmit = useStore(state => state.onSubmit);
  const [searchParams] = useSearchParams();
  const valueSearchParams = searchParams.get("search");

  useEffect(() => {
    if (valueSearchParams) {
      onSubmit(valueSearchParams);
    }
  }, [onSubmit, valueSearchParams]);

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
