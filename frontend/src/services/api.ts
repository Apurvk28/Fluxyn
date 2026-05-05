import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const generateWebsite = async (prompt: string) => {
  const response = await api.post("/generate", { prompt });
  return response.data;
};
