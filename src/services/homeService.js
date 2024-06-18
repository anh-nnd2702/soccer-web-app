import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getData = async () => {
  const response = await axiosInstance.get("/posts");
  return response.data;
};

export default axiosInstance;
