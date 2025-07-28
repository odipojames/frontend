import axios from "axios";

const api = axios.create({
  baseURL: "odipojames.pythonanywhere.com/api/",
});

export default api;
