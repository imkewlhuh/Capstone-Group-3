import React from "react";
import "../../css/Products.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


// const Products = ({productItems}) => {
//   return (
//     <div className="products">
//         {productItems.map((productItem) =>(
//             <div key={productItem.id} className="card">
//                 <div>
//                     <img
//                     className="product-image"
//                     src={productItem.image}
//                      alt={productItem.name}
//                      />
//                 </div>

//                 <div>
//                     <h3 className="product-name">{productItem.name}</h3>
//                 </div>
//                 <div className="product-price">{productItem.price}</div>

//                 <div>
//                     <h3 className="product-units">{productItem.units}</h3>
//                 </div>
//                 </div>
//         ))}
//        </div>
//   );
// };

// export default Products;

const Products = ({ productItems }) => {
    const totalPrice = productItems.reduce((total, product) => total + product.price, 0);
  const totalUnits = productItems.reduce((total, product) => total + product.units, 0);
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

