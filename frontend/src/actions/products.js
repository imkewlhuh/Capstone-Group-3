import axios from "axios";
import { baseURL } from "../api/constants";

const fetchProductListTypes = async () => {
  try {
    const productListTypes = await axios.get(
      `${baseURL}/product-type`
    );

    if (productListTypes.status === 200) {
      return productListTypes.data;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

export { fetchProductListTypes };
