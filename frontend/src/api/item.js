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

//Get item by id.
export async function getItemById(id) {
    const token = sessionStorage.getItem("token");

    const response = await axios.get(
        `${baseURL}/item/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};

//UPDATE item. Pass in id and new object with SKU, expDate, and listId
export async function updateItemById(id, updatedItem) {
    const token = sessionStorage.getItem("token");

    const response = await axios.put(
        `${baseURL}/item/${id}`,
        updatedItem,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};

//DELETE item by id
export async function deleteItemById(id) {
    const token = sessionStorage.getItem("token");

    const response = await axios.delete(
        `${baseURL}/item/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};