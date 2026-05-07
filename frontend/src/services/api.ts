import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const generateWebsite = async (prompt: string) => {
  const response = await api.post("/generate", { prompt });
  return response.data;
};

export const registerUser = async (data: any) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const loginUser = async (data: any) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
