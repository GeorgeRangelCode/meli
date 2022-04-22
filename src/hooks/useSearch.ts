import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const useSearch = () => {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate({
      pathname: "/",
      search: `?${createSearchParams({
        search: valueSearch,
      })}`,
    });
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
