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

const fetchProductList = async (id) => {
  try {
    const productList = await axios.get(
      `http://localhost:8080/itemList/${id}`
    );

    if (productList.status === 200) {
      return productList.data;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
export { fetchProductListTypes,fetchProductList };
