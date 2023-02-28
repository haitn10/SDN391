import axios from "axios";
const baseURL = "http://localhost:5000";

export const login = async (req, res, next) => {
  try {
    const { data: result } = await axios.post(`${baseURL}/login`, req);
    axios.default.header = { access_token: result.accessToken };
    sessionStorage.setItem("data", JSON.stringify(result));
    console.log(result);
    return Promise.resolve(JSON.stringify(result));
  } catch (e) {
    return Promise.reject();
  }
};

export const logout = async () => {
  await sessionStorage.removeItem("data");
};

export const getPlayer = async (req, res, next) => {
  try {
    const { data: result } = await axios.get(`${baseURL}/players/`);
    return Promise.resolve(JSON.stringify(result));
  } catch (e) {
    return Promise.reject();
  }
};

export const addPlayer = async (req, res) => {
  try {
    const { data: result } = await axios.post(`${baseURL}/players/`, req);
    return Promise.resolve(JSON.stringify(result));
  } catch (e) {
    return Promise.reject();
  }
};
