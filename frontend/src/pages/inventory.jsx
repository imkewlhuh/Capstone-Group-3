import React from "react"
import { useState } from "react"
import "../../css/inventory.css";
import { FaBell, FaUser, FaSearch} from "react-icons/fa";

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
       <div className="inventoryHeader">
        <h1 className="mb-0">Inventory</h1>
      </div>
      <div className="subheader1">
        <div class="input-group">
            <div class="form-outline">
            <input type="search" id="form1" class="form-control"/>
            <label class="form-label" for="form1">Search</label>
            </div>
                <button type="button" class="btn btn-primary">
                <i class="FaSearch"></i>
                </button>
        </div>
            <FaBell size={20} className="me-3"/>
            <FaUser size={20} />
      </div>
            <div className="totalinfo">
                Folders: 6
                Items: 0
                Quantity: 992 Units 
                Total Value: 123,123.02
            </div>

            <div className='app-container'>
                {
                sampleData.map(element=>{
                    return  <InventoryComponent
                    thumbnailImg={element.thumbnailImg} 
                    item={element.item}
                    itemUnits={element.itemUnits}
                    itemTotal={element.itemTotal}
                    />
                })
                }
                <InventoryComponent/>
                <InventoryComponent/>
                <InventoryComponent/>
                </div>

    </div>
    )
};