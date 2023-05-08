import React from "react"
import { useState } from "react"
import "../../css/inventory.css";

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
            <header className="header">
                <h1>Inventory- All Items</h1>
            </header>
            
            <div classname='subheader'>
            <input className="searchBar" type="text" placeholder="Search all items"/>
            <button className="importfiles">Import Files</button>
            <button className="addnew">Add New</button>
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