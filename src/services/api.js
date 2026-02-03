import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchProducts = () => API.get("/products");
export const fetchProductsByCategory = (category) =>
  API.get(`/products/${category}`);
export const sendContactForm = (data) => API.post("/contact", data);