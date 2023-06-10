import axios from "axios";
import { baseURL } from "./constants";

//GET All items for list ID
export async function getAllItems(listId) {
    const token = sessionStorage.getItem("token");

    const response = await axios.get(
        `${baseURL}/item/list/${listId}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
}

//Create an item. Pass in object with SKU, exp date, and listId
export async function addItem(item) {
    const token = sessionStorage.getItem("token");

    const response = await axios.post(
        `${baseURL}/item/new`,
        item,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};

//Get item by SKU.
export async function getItemBySKU(SKU) {
    const token = sessionStorage.getItem("token");

    const response = await axios.get(
        `${baseURL}/item/${SKU}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};

//UPDATE item. Pass in SKU and new object with SKU, expDate, and listId
export async function updateItemBySKU(SKU, updatedItem) {
    const token = sessionStorage.getItem("token");

    const response = await axios.put(
        `${baseURL}/item/${SKU}`,
        updatedItem,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};

//DELETE item by SKU
export async function deleteItemBySKU(SKU) {
    const token = sessionStorage.getItem("token");

    const response = await axios.delete(
        `${baseURL}/item/${SKU}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};