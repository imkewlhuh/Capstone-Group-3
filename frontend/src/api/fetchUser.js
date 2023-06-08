import axios from "axios";

const fetchUser = async (token) => {
  try {
    const user = await axios.get(
      "http://localhost:8080/user/current",
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
