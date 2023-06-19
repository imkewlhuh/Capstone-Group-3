import React from "react"
import { useState, useEffect } from "react"
import "../../css/inventory.css";
import {
  Card, Container, Form, Alert
} from "react-bootstrap";
import IVModal from "../components/IVModal";
import Header from "../components/header";
import { createItemList, deleteItemList, getAllItemLists, getItemList, updateItemList } from "../api/itemList";
import { fetchUser } from "../api/fetchUser";
// import { useLoaderData } from "react-router-dom"

// let sampleData = [
//   {
//     thumbnailImg: "https://via.placeholder.com/600x400",
//     item: "Jackets",
//     itemUnits: "90 Units",
//     itemTotal: "$9840",
//     SKU: "12345"
//   },
//   {
//     thumbnailImg: "https://via.placeholder.com/600x400",
//     item: "Jackets",
//     itemUnits: "90 Units",
//     itemTotal: "$9840",
//     SKU: "12355"
//   },
//   {
//     thumbnailImg: "https://via.placeholder.com/600x400",
//     item: "Jackets",
//     itemUnits: "90 Units",
//     itemTotal: "$9840",
//     SKU: "12234"
//   }
// ];

function InventoryCard(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState(props.name);
  const [count, setCount] = useState(props.count);

  const handleHover = (direction, e) => {
    if (direction === "in") {
      e.target.nextElementSibling.childNodes[2].classList.add("btnHover");
      e.target.nextElementSibling.childNodes[3].classList.add("btnHover");

    } else if (direction === "out") {
      e.target.nextElementSibling.childNodes[2].classList.remove("btnHover");
      e.target.nextElementSibling.childNodes[3].classList.remove("btnHover");

    }
  }

  return (
    <Card className="invCard" style={{position: "relative"}} key={props.key} >
      <Card.Img onMouseEnter={(e) => handleHover("in", e)} onMouseLeave={(e) => handleHover("out", e)} className="mb-3" variant="top" src="https://via.placeholder.com/600x400" />
      <Card.Body>

        <Card.Title className="mb-5">
          {
            showEdit ?
              <Form.Control type="text" placeholder={props.name} onChange={(e) => setName(e.target.value)} />
              :
              <h3>{props.name}</h3>
          }
        </Card.Title>
        <Card.Text>
          {
            showEdit ?
              <Form.Control type="number" placeholder={props.count} onChange={(e) => setCount(e.target.value)} />
              :
              <span style={{fontSize: "1.1em"}}>{props.count}<span> units</span></span>
          }
        </Card.Text>

        {/* <Card.Text>{props.itemTotal}</Card.Text> */}
        <button type="button" className="listBtn editBtn" onClick={showEdit ? async () => { await updateItemList(props.id, {name: name, count: count}); setShowEdit(false); props.refresh(); } : () => setShowEdit(true)}>{showEdit ? <i className="bi bi-check-square"></i> : <i className="bi bi-pencil-square"></i>}</button>
        <button type="button" className="listBtn delBtn" onClick={async () => { await deleteItemList(props.id); props.refresh(); }}><i className="bi bi-trash"></i></button>
      </Card.Body>
    </Card>
  );
}

export default function Inventory() {
  // const invitems = useLoaderData();
  // console.log(invitems.data.itemLists);

  // const [itemList, updateItemList, setItemLists] = useState(invitems.data.itemLists)
  // const itemList = invitems.data.itemLists;

  const [businessId, setBusinessId] = useState();
  const [itemLists, setItemLists] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const fetch = async () => {
      const user = await fetchUser(token);
      console.log(user.user);
      setBusinessId(user.user.businessId);

      // Can be moved to loader in main.jsx
      const itemLists = await getAllItemLists(user.user.businessId);
      console.log(itemLists);
      setItemLists(itemLists.data.itemLists);
    }
    fetch();
  }, [refresh]);

  const calcUnits = () => {
    let total = 0;
    itemLists.forEach((list) => {
      total += list.count;
    })
    return total;
  }

  return (
    <Container>
      <Header title="Inventory - All Items" />

      <div className="subheader1">
        <div className="input-group">
          <div className="form-outline">
            <input type="search" id="form1" className="form-control" placeholder="Search all items" />
            {/* <label class="form-label" for="form1">Search</label> */}
          </div>
          {/* <button type="button" class="btn btn-primary">
                    <i class="FaSearch"></i>
                </button> */}
        </div>

        <div className="importadd">
          <button type="button" className="importBtn">IMPORT FILES</button>{' '}
          <IVModal businessId={businessId} refresh={() => setRefresh(!refresh)} />
        </div>

      </div>

      <div className="totalinfo mt-3">
        <p><span>Folders: </span>{itemLists ? itemLists.length : "0"}</p>
        <p><span>Items: </span>0</p>
        <p><span>Quantity: </span>{itemLists ? calcUnits() : "0"} Units</p>
        <p><span>Total Value: </span>123,123.02</p>
      </div>

      <div className='app-container container'>
        {
          itemLists.length > 0 ?
          itemLists.map((list, i) => {
            return (
              <div key={i}>
                <InventoryCard
                  {...list}
                  refresh={() => setRefresh(!refresh)}
                />
              </div>
            )
          }) 
          : 
          <Alert variant="secondary">No Existing Categories. Add new to manage your inventory!</Alert>
        }
      </div>

    </Container>
  )
};