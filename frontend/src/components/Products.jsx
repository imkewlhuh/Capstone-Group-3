import React from "react";
import "../../css/Products.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FaBell, FaUser } from "react-icons/fa";

const Products = ({ productItems }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-0">Inventory-Electronics</h1>
        <div>
          <FaBell size={20} className="me-3" />
          <FaUser size={20} />
        </div>
      </div>
      <Row className="mt-3">
        <Col>
          <Form className="float-start">
            <Form.Control type="text" placeholder="Search all items" className="mr-sm-2" style={{width:"300px"}}/>
          </Form>
        </Col>
        <Col>
          <ButtonToolbar className="float-end">
            <Button variant="primary">Import Files</Button>
            <Button variant="success" className="ms-2">Add New</Button>
          </ButtonToolbar>
        </Col>
      </Row>
      <Row xs={3} md={3} className="g-4 mt-3">
        {productItems.map((productItem) => (
          <Col key={productItem.id}>
            <Card border="primary" key={productItem.id}>
              <Card.Img
                className="product-image"
                variant="top"
                src={productItem.image}
              />
              <Card.Body>
                <Card.Title className="text-center">{productItem.name}</Card.Title>
                <Card.Text className="text-center"> Units: {productItem.units} | Price: ${productItem.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;



