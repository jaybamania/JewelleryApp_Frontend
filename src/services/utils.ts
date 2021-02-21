import axios from "axios";
import { BASE_URL } from "../constants";

export const sendGETRequest = async (path: string) => {
  try {
    const response = await axios.get(BASE_URL + path);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendGETRequestWithToken = async (path: string) => {
  try {
    const token = localStorage.getItem("ACCESS_TOKEN");
    const bearer = "Bearer " + token;
    const response = await axios.get(BASE_URL + path, {
      headers: {
        Authorization: bearer,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendPOSTRequest = async (path: string, data: any) => {
  try {
    const response = await axios.post(BASE_URL + path, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendPOSTRequestWithToken = async (path: string, data: any) => {
  try {
    const token = localStorage.getItem("ACCESS_TOKEN");
    const bearer = "Bearer " + token;
    const response = await axios.post(BASE_URL + path, data, {
      headers: {
        Authorization: bearer,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendPUTRequestWithToken = async (path: string, data: any) => {
  try {
    const token = localStorage.getItem("ACCESS_TOKEN");
    const bearer = "Bearer " + token;
    const response = await axios.put(BASE_URL + path, data, {
      headers: {
        Authorization: bearer,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const setTokens = ({ access, refresh }: any) => {
  localStorage.setItem("ACCESS_TOKEN", access);
  localStorage.setItem("REFRESH_TOKEN", refresh);
};
