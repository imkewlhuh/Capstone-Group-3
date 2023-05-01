import React from "react";
import "../../css/Products.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Products = ({ productItems }) => {
  return (
    <Row xs={1} md={2} className="g-4">
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
  );
};

export default Products;

