import { BASE_URL } from "../constants";

const callApi = async (endpoint: string) => {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default callApi;
