import React, { useState } from "react";
import "../../css/Products.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FaBell, FaUser, FaTags } from "react-icons/fa";

const Products = () => {
  const [customTexts, setCustomTexts] = useState({});

  const handleCustomTextChange = (itemId, value) => {
    setCustomTexts((prevCustomTexts) => ({
      ...prevCustomTexts,
      [itemId]: value,
    }));
  };

  const getCustomText = (itemId) => {
    return customTexts[itemId] || "";
  };

  const productItems = [
    {
        id: 1,
        name: "Item 1",
        units: 40,
        price: 249,
        image: "/images/pics/beatsheadphone.png",
        customText1: "Beats",
        customText2: "Headphones",
      },
      {
          id: 2,
          name: "Item 2",
          units: 55,
          price: 80,
          image: "/images/pics/solheadphone.png",
          customText1: "Sol",
          customText2: "Headphones",
        },
        {
          id: 3,
          name: "Item 3",
          units: 50,
          price: 99,
          image: "/images/pics/sennheiser.jpg",
          customText1: "Sennheiser",
          customText2: "Headphones",
        },
        {
          id: 4,
          name: "Item 4",
          units: 55,
          price: 1199,
          image: "/images/pics/iphonex.jpg",
          customText1: "Iphone",
          customText2: "Smartphone",
        },
        {
          id: 5,
          name: "Item 5",
          units: 50,
          price: 110,
          image: "/images/pics/samsung.jpg",
          customText1: "Samsung",
          customText2: "Headphones",
        },
        {
          id: 6,
          name: "Item 6",
          units: 55,
          price: 180,
          image: "/images/pics/oneplus.jpg",
          customText1: "OnePlus",
          customText2: "Earbuds",
        },
        {
          id: 7,
          name: "Item 7",
          units: 40,
          price: 2999,
          image: "/images/pics/macbookpro.jpg",
          customText1: "MacBook",
          customText2: "Laptop",
        },
        {
          id: 8,
          name: "Item 8",
          units: 50,
          price: 1099,
          image: "/images/pics/acer.jpg",
          customText1: "Acer",
          customText2: "Laptop",
        },
  ];

  const totalQuantity = productItems.reduce(
    (total, productItem) => total + productItem.units,
    0
  );
  const totalValue = productItems.reduce(
    (total, productItem) => total + productItem.units * productItem.price,
    0
  );
  const totalUnits = productItems.reduce(
    (total, productItem) => total + productItem.units,
    0
  );

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-0">Inventory-Electronics</h1>
        <div>
          <FaBell size={20} className="me-3" />
          <FaUser size={20} />
        </div>
      </div>
      <Row className="mt-3 align-items-center">
        <Col>
          <Form className="float-start">
            <Form.Control
              type="text"
              placeholder="Search all items"
              className="mr-sm-2"
              style={{ width: "300px" }}
            />
          </Form>
        </Col>
        <Col className="text-center">
          <h3>Quantity</h3>
          <p>Total Units: {totalUnits}</p>
        </Col>
        <Col className="text-center">
          <h3>Items</h3>
          <p>Total Quantity: {totalQuantity} | Total Items: {productItems.length}</p>
        </Col>
        <Col className="text-center">
          <h3>Value</h3>
          <p>Total Value: ${totalValue}</p>
        </Col>
        <Col className="d-flex justify-content-end">
          <ButtonToolbar>
            <Button variant="warning">Import Files</Button>
            <Button variant="success" className="ms-2">
              Add New
            </Button>
          </ButtonToolbar>
        </Col>
      </Row>
     
 <Row xs={3} md={3} className="g-4 mt-3">
        {productItems.map((productItem) => (
          <Col key={productItem.id}>
            <Card border="Secondary" key={productItem.id}>
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
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Products;