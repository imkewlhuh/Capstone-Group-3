import axios from "axios";
import { baseURL } from "./constants";

const fetchUser = async (token) => {
  try {
    const user = await axios.get(
      `${baseURL}/user/current`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (user.status === 200) {
      return user.data;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export { fetchUser };
