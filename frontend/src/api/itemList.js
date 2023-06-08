import axios from "axios";
import { baseURL } from "./constants";

//GET All item lists for logged in user
export async function getAllItemLists() {
    const token = sessionStorage.getItem("token");

    const response = await axios.get(
        `${baseURL}/itemList/`,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};

//CREATE an item list. Pass in an object with name, count, and businessId
export async function createItemList(itemList) {
    const token = sessionStorage.getItem("token");

    const response = await axios.post(
        `${baseURL}/itemList/new`,
        itemList,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    
    console.log(response);
    return response;
}

//GET item list. Pass in name of item list
export async function getItemList(name) {
    const token = sessionStorage.getItem("token");

    const response = await axios.get(
        `${baseURL}/itemList/${name}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
}

//UPDATE item list. Pass in name and new object with name, count
export async function updateItemList(name, updatedList) {
    const token = sessionStorage.getItem("token");

    const response = await axios.put(
        `${baseURL}/itemList/${name}`,
        updatedList,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};

//DELETE item list.
export async function deleteItemList(name) {
    const token = sessionStorage.getItem("token");

    const response = await axios.delete(
        `${baseURL}/itemList/${name}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
}