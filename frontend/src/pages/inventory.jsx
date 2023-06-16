import React from "react"
import { useState, useEffect } from "react"
import "../../css/inventory.css";
import { FaBell, FaUser, FaSearch} from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal, Button } from "react-bootstrap";
import IVModal from "../components/IVModal";
import Header from "../components/header";
import { createItemList, deleteItemList, getAllItemLists, getItemList, updateItemList } from "../api/itemList";
import { fetchUser } from "../api/fetchUser";
import { useLoaderData } from "react-router-dom"
import UserField from "../components/signup-fields/userField";



  function InventoryComponent(props){
    return(
      <div className="itemContainer">
        <img src={props.thumbnailImg}/>
        <div className="content">
          <p>{props.item}</p>
          <p>{props.itemUnits}</p>
          <p>{props.itemTotal}</p>
        </div>
      </div>
    )
  }
  

function InventoryCard(props) {
    return (

      <Card style={{width: '400px'}}>
        <Card.Img variant="top" src="https://via.placeholder.com/600x400" />
        <Card.Body>
          <Card.Title>{props.item}</Card.Title>
          <Card.Text>{props.itemUnits}</Card.Text>
          <Card.Text>{props.itemTotal}</Card.Text>
          <row>
          <button type="button" class="btn btn-primary" onClick={()=> updateItemList()}>Edit</button>
          <button type="button" class="btn btn-danger" onClick={()=>deleteItemList(InventoryCard.name)}>Delete</button>
          </row>
        </Card.Body>
      </Card>
    );
  }


  let sampleData = [
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      item: "Jackets",
      itemUnits: "90 Units",
      itemTotal: "$9840",
      SKU:"12345"
    },
    {
        thumbnailImg: "https://via.placeholder.com/600x400",
        item: "Jackets",
        itemUnits: "90 Units",
        itemTotal: "$9840",
        SKU: "12355"
    },
    {
        thumbnailImg: "https://via.placeholder.com/600x400",
        item: "Jackets",
        itemUnits: "90 Units",
        itemTotal: "$9840",
        SKU: "12234"
    }
  ];


  export default function Inventory(){

    const invitems = useLoaderData();
    console.log(invitems.data.itemLists);

    const [itemList, updateItemList, setItemLists] = useState(invitems.data.itemLists)
    // const itemList = invitems.data.itemLists;

    

    const [businessId, setBusinessId] = useState();
    // const [itemLists, setItemLists] = useState();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const fetch = async () => {
            const user = await fetchUser(token);
            console.log(user.user);
            setBusinessId(user.user.businessId);

            // Can be moved to loader in main.jsx
            // const itemLists = await getAllItemLists();
            // console.log(itemLists);
            // setItemLists(itemLists.data.itemLists);
        }
        fetch();
    }, []);

    return (
    <div className="inventory-container">
       <Header title="Inventory - All Items" />

      <div className="subheader1">
        <div class="input-group">
            <div class="form-outline">
            <input type="search" id="form1" class="form-control" placeholder="Search all items"/>
            {/* <label class="form-label" for="form1">Search</label> */}
            </div>
                {/* <button type="button" class="btn btn-primary">
                    <i class="FaSearch"></i>
                </button> */}
        </div>
        <div className="importadd">

        <Button variant="warning">IMPORT FILES</Button>{' '}
        <IVModal businessId={businessId}/>
        </div>
     </div>
     <div className="moreinfo">
            <div className="totalinfo">
                Folders: 6
                Items: 0
                Quantity: 992 Units 
                Total Value: 123,123.02
            </div>
    </div>
            <div className='app-container'>
                {
                itemList.map(element=>{
                    return  <InventoryCard
                    thumbnailImg={element.thumbnailImg} 
                    item={element.name}
                    itemUnits={element.count}
                    itemTotal={element.itemTotal}
                    
                    />
                })
                }
            </div>

    </div>
    )
};