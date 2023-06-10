import React, { useState } from "react";
import "../../css/Products.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FaBell, FaUser, FaTags, FaSearch, FaPlus } from "react-icons/fa";
import {useLoaderData} from 'react-router-dom';

const Products = () => {
  const [customTexts, setCustomTexts] = useState({});
    const productlist = useLoaderData()
    console.log(productlist)
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
      name: "Beats",
      units: 40,
      price: 249,
      image: "/images/pics/beatsheadphone.png",
      customText1: "Sky Blue",
      customText2: "Headphones",
    },
    {
      id: 2,
      name: "Sol",
      units: 55,
      price: 80,
      image: "/images/pics/solheadphone.png",
      customText1: "Red Silver",
      customText2: "Headphones",
    },
    {
      id: 3,
      name: "Sennheiser",
      units: 50,
      price: 99,
      image: "/images/pics/sennheiser.jpg",
      customText1: "Black",
      customText2: "Headphones",
    },
    {
      id: 4,
      name: "Iphone X",
      units: 55,
      price: 1199,
      image: "/images/pics/iphonex.jpg",
      customText1: "White",
      customText2: "Smartphone",
    },
    {
      id: 5,
      name: "Samsung",
      units: 50,
      price: 110,
      image: "/images/pics/samsung.jpg",
      customText1: "Metallic",
      customText2: "Headphones",
    },
    {
      id: 6,
      name: "OnePlus",
      units: 55,
      price: 180,
      image: "/images/pics/oneplus.jpg",
      customText1: "Midnight",
      customText2: "Earbuds",
    },
    {
      id: 7,
      name: "MacBook",
      units: 40,
      price: 2999,
      image: "/images/pics/macbookpro.jpg",
      customText1: "Space Gray",
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
        <h1 className="mb-0">Inventory - All Items &gt; Electronics</h1>
        <div className="top-right-icons">
          <div className="icon-wrapper">
            <FaBell size={20} className="icon" />
          </div>
          <div className="icon-wrapper">
            <FaSearch size={20} className="icon" />
          </div>
          <div className="icon-wrapper">
            <FaUser size={20} className="icon" />
          </div>
        </div>
      </div>
      <Row className="mt-3 align-items-center">
        <Col>
          <Form className="float-start">
            <div className="position-relative">
              <div className="position-absolute top-50 end-3 translate-middle-y">
                <FaSearch size={18} color="gray" />
              </div>
              <Form.Control
                type="text"
                placeholder="Search all items"
                className="pl-5 pr-5"
                style={{ width: "300px", paddingLeft: "35px" }}
              />
            </div>
          </Form>
        </Col>
      </Row>
      <Row
        className="mt-3 align-items-center"
        style={{ marginBottom: "20px" }}
      >
        <Col className="text-center">
          <h3>Folders: 6</h3>
        </Col>
        <Col className="text-center">
          <h3>Items: 7</h3>
        </Col>
        <Col className="text-center">
          <h3>Quantity: 992 Units</h3>
        </Col>
        <Col className="text-center">
          <h3>Total Value: $10,930.02</h3>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <ButtonToolbar>
            <Button variant="warning">Import Files</Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button
              variant="success"
              className="ms-2"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                backgroundColor: "green",
              }}
            >
              <span style={{ marginRight: "5px" }}>Add New</span>
              <FaPlus size={18} color="orange" />
            </Button>
          </ButtonToolbar>
        </Col>
      </Row>
      <Row className="g-4 mt-3">
        {productItems.map((productItem, index) => (
          <Col key={productItem.id} xs={12} md={6} lg={3}>
            <Card border="light" key={productItem.id}>
              <Card.Img
                className="product-image"
                variant="top"
                src={productItem.image}
              />
              <Card.Body>
                <h5 className="text-center">{productItem.name}</h5>
                <p className="text-center">
                  Units: {productItem.units} | Price: ${productItem.price}
                </p>
                <div className="yellow-box">
                  <Button variant="warning" className="price-tag-button">
                    <FaTags size={18} color="black" className="price-tag" />
                    <span className="tag-text">
                      {getCustomText(productItem.id) ||
                        productItem.customText1 ||
                        "Red "}
                    </span>
                  </Button>
                  <Button variant="warning" className="price-tag-button">
                    <FaTags size={18} color="black" className="price-tag" />
                    <span className="tag-text">
                      {getCustomText(productItem.id) ||
                        productItem.customText2 ||
                        "Headphone"}
                    </span>
                  </Button>
                </div>
              </Card.Body>
            </Card>
            {index < 4 && <div className="card-heading"></div>}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;

