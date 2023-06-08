import React from "react"
import { useState } from "react"
import "../../css/inventory.css";
import { FaBell, FaUser, FaSearch} from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/header";


function ConditionalComponent(props){
    return (
      <div>
        {props.showComponent1 ? 
          <div>Component 1</div>
        :
          <div>Component 2</div>
        }
      </div>
    )
  }
  
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
    },
    {
        thumbnailImg: "https://via.placeholder.com/600x400",
        item: "Jackets",
        itemUnits: "90 Units",
        itemTotal: "$9840",
    },
    {
        thumbnailImg: "https://via.placeholder.com/600x400",
        item: "Jackets",
        itemUnits: "90 Units",
        itemTotal: "$9840",
    }
  ];


  export default function Inventory(){
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
        <Button variant="success">ADD NEW +</Button>{' '}
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
                sampleData.map(element=>{
                    return  <InventoryCard
                    thumbnailImg={element.thumbnailImg} 
                    item={element.item}
                    itemUnits={element.itemUnits}
                    itemTotal={element.itemTotal}
                    />
                })
                }
            </div>

    </div>
    )
};