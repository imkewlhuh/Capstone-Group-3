import axios from "axios";

const fetchProductListTypes = async () => {
  try {
    const productListTypes = await axios.get(
      "http://localhost:8080/product-type"
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
