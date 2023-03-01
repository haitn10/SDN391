import axios from "axios";
export const baseURL = "http://localhost:5000";

export const login = async (req, res, next) => {
  try {
    const { data: result } = await axios.post(`${baseURL}/login`, req);
    sessionStorage.setItem("data", JSON.stringify(result));
    return Promise.resolve(JSON.stringify(result));
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getPlayers = async () => {
  try {
    const { data: result } = await axios.get(`${baseURL}/players/`);
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getPlayerByID = async (id) => {
  try {
    const { data: result } = await axios.get(`${baseURL}/players/${id}`);
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const addPlayer = async (req, res) => {
  try {
    const { data: result } = await axios.post(
      `${baseURL}/players/add`,
      req.values,
      {
        headers: {
          access_token: req.token,
        },
      }
    );
    return Promise.resolve(result);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const editPlayer = async (req, res) => {
  try {
    const { data: result } = await axios.put(
      `${baseURL}/players/${req.id}`,
      req.values,
      {
        headers: {
          access_token: req.token,
        },
      }
    );
    return Promise.resolve(result);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const deletePlayerByID = async (req, res) => {
  try {
    const { data: result } = await axios.delete(
      `${baseURL}/players/${req.id}`,
      {
        headers: {
          access_token: req.token,
        },
      }
    );
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const { data: result } = await axios.get(`${baseURL}/users/all`, {
      headers: {
        access_token: req.token,
      },
    });
    return result;
  } catch (e) {
    return Promise.reject(e);
  }
};
