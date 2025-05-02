import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // URL de ton backend API
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
