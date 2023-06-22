import React, { useEffect, useState } from "react";
import "../../css/Products.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FaBell, FaUser, FaTags } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Header from "./header";
import SingleModal from "../components/singleModal.jsx";
import SingleItem from "./singleItem";
import { useLoaderData, useMatches } from "react-router-dom";
import { getItemList } from "../api/itemList";
import { getAllItems } from "../api/item";
import { Alert, Container } from "react-bootstrap";

const Products = () => {
  const [customTexts, setCustomTexts] = useState({});
  const [listName, setListName] = useState();
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState();
  const [search, setSearch] = useState("");
  const productdata = useLoaderData();
  const matches = useMatches();

  useEffect(() => {
    let listId = productdata.config.url.split("/");
    listId = parseInt(listId[listId.length - 1]);
    console.log(listId);
    const fetchList = async () => {
      const list = await getItemList(listId);
      const itemsData = await getAllItems(listId);

      setListName(list.data.itemList[0].name);
      setItems(itemsData.data.items);
    }
    fetchList();
  }, [refresh]);

  // const productslist = productdata.data.items;

  const handleCustomTextChange = (itemId, value) => {
    setCustomTexts((prevCustomTexts) => ({
      ...prevCustomTexts,
      [itemId]: value,
    }));
  };

  const getCustomText = (itemId) => {
    return customTexts[itemId] || "";
  };

  const totalValue = items.reduce(
    (total, productItem) => total + productItem.quantity * productItem.price,
    0
  );

  const formattedTotalValue = totalValue.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });

  const totalUnits = items.reduce(
    (total, productItem) => total + productItem.quantity,
    0
  );

  return (
    <>
      <Header title={listName ? `Inventory - ${listName}` : "Inventory - Single Item"} />
      <Row className="mt-3 align-items-center">
        <Col>
          <Form className="float-start">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <BiSearch size={18} />
                </span>
              </div>
              <Form.Control
                type="text"
                placeholder="Search all items"
                className="mr-sm-2 search-input"
                style={{ paddingLeft: "30px", width: "300px" }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </Form>
        </Col>
        <Col>
          <ButtonToolbar className="float-end gap-3 mt-3">
            <button type="button" className="importBtn">IMPORT FILES</button>{' '}
            <SingleModal
              list={matches[1].params.listId}
              refresh={() => setRefresh(!refresh)}
            />
          </ButtonToolbar>
        </Col>
      </Row>
      <Row className="mt-3 align-items-center justify-content-center">
        <Col className="text-center" xs={3} md={3}>
          <h3>Folders: 6</h3>
        </Col>
        <Col className="text-center" xs={3} md={3}>
          <h3>Items: {items.length}</h3>
        </Col>
        <Col className="text-center" xs={3} md={3}>
          <h3>Quantity: {totalUnits} units</h3>
        </Col>
        <Col className="text-center" xs={3} md={3}>
          <h3>Total Value: {formattedTotalValue}</h3>
        </Col>
      </Row>
      <Container style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", alignItems: "center", justifyContent: "center" }}>
        {
          items.length > 0 ?
            items.map((productItem) => {
              if (search === "") {
                return (
                  <SingleItem
                    id={productItem.id}
                    name={productItem.name}
                    units={productItem.quantity}
                    image={productItem.images}
                    price={productItem.price}
                    tags={productItem.tags}
                    refresh={() => setRefresh(!refresh)}
                  />
                )
              } else {
                if (productItem.name.includes(search)) {
                  return (
                    <SingleItem
                      id={productItem.id}
                      name={productItem.name}
                      units={productItem.quantity}
                      image={productItem.images}
                      price={productItem.price}
                      tags={productItem.tags}
                      refresh={() => setRefresh(!refresh)}
                    />
                  )
                }
              }

            })
            :
            <Alert style={{ width: "fit-content" }} variant="secondary">No Existing Items. Add new to manage your inventory!</Alert>
        }
      </Container>
    </>
  );
};

export default Products;
