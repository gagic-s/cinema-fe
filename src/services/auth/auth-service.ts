import axiosInstance from "../api/axiosInstance";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginService = async (params: any) => {
  try {
    const response = await axiosInstance.post(`/auth/login`, params);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerService = async (params: any) => {
  try {
    const response = await axiosInstance.post(`/auth/register`, params);
    return response.data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};


