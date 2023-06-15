import React, { useState } from "react";
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
import SingleItem from './singleItem';
import { useLoaderData,useMatches } from "react-router-dom";

const Products = () => {
  const [customTexts, setCustomTexts] = useState({});
  const productdata=useLoaderData();
  const matches=useMatches()
  console.log(matches)
//   console.log(productdata.data)
  const productslist=productdata.data.items
  console.log(productslist)
  const handleCustomTextChange = (itemId, value) => {
    setCustomTexts((prevCustomTexts) => ({
      ...prevCustomTexts,
      [itemId]: value,
    }));
  };

  const getCustomText = (itemId) => {
    return customTexts[itemId] || "";
  };

  
  const totalValue = productslist.reduce(
    (total, productItem) => total + (productItem.quantity * productItem.price),
    0
  );
  const totalUnits = productslist.reduce(
    (total, productItem) => total + productItem.quantity,
    0
  );

  return (
    <>
      <Header title="Inventory - Electronics" />
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
              />
            </div>
          </Form>
        </Col>
        <Col>
          <ButtonToolbar className="float-end mt-3">
            <Button variant="warning">Import Files</Button>
            <SingleModal list={matches[1].params.listId}/>
          </ButtonToolbar >
        </Col>
      </Row>
      <Row className="mt-3 align-items-center justify-content-center">
        <Col className="text-center" xs={3} md={3}>
          <h3>Folders: 6</h3>
        </Col>
        <Col className="text-center" xs={3} md={3}>
          <h3>Items:{productslist.length}</h3>
        </Col>
        <Col className="text-center" xs={3} md={3}>
          <h3>Quantity: {totalUnits} units</h3>
        </Col>
        <Col className="text-center" xs={3} md={3}>
          <h3>Total Value: {totalValue}</h3>
        </Col>
      </Row>
      <Row xs={4} md={4} className="g-4 mt-3">
        {productslist.map((productItem) => (
          <Col key={productItem.id}>
            {/*Add tags from productItem as a prop*/}
            <SingleItem  
            id={productItem.id}
            name={productItem.name}
            units={productItem.quantity}
            image={productItem.images}
            price={productItem.price}
            tags={productItem.tags}
            />
            {/* <Card border="Light" key={productItem.id}>
              <Card.Img
                className="product-image"
                variant="top"
                src={productItem.image}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  {productItem.name}
                </Card.Title>
                <Card.Text className="text-center">
                  Units: {productItem.units} | Price: ${productItem.price}
                </Card.Text>
                <div className="yellow-box">
                  <div className="price-tag-box">
                    <FaTags size={18} color="black" className="price-tag" />
                    <span className="tag-text">
                      {getCustomText(productItem.id) ||
                        productItem.customText1 ||
                        "Red "}
                    </span>
                  </div>
                  <div className="price-tag-box">
                    <FaTags size={18} color="black" className="price-tag" />
                    <span className="tag-text">
                      {getCustomText(productItem.id) ||
                        productItem.customText2 ||
                        "Headphone"}
                    </span>
                  </div>
                </div>
              </Card.Body>
            </Card> */}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;

