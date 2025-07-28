import axios from "axios";

const api = axios.create({
  baseURL: "https://odipojames.pythonanywhere.com/api/",
});

export default api;
