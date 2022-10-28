import axios from "axios";

const Instance = (token) => {
  return axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    credentials: "include",
    withCredentials: true,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};


export default Instance;
