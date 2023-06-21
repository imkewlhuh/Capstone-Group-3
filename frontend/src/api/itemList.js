import axios from "axios";
import { baseURL } from "./constants";

//GET All item lists for logged in user
export async function getAllItemLists(businessId) {
    const token = sessionStorage.getItem("token");

    const response = await axios.get(
        `${baseURL}/itemList/business/${businessId}`,
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
};

//GET item list. Pass in id of item list
export async function getItemList(id) {
    const token = sessionStorage.getItem("token");

    const response = await axios.get(
        `${baseURL}/itemList/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};

//UPDATE item list. Pass in id and new object with name, count
export async function updateItemList(id, updatedList) {
    const token = sessionStorage.getItem("token");

    const response = await axios.put(
        `${baseURL}/itemList/${id}`,
        updatedList,
        { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
    return response;
};

// DELETE item list.
export async function deleteItemList(id) {
    const token = sessionStorage.getItem("token");
    console.log(id);

    if (id === null || id === undefined) {
        console.log("Invalid id!");
    } else {
        const response = await axios.delete(
            `${baseURL}/itemList/${id}`,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log(response);
        return response;
    }


};

