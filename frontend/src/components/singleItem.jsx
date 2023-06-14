import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FaBell, FaUser, FaTags } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const SingleItem=(productItem) =>{

    return (
        <Card border="Light" key={productItem.id}>
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
                {/* {getCustomText(productItem.id) ||
                  productItem.customText1 ||
                  "Red "} */}
              </span>
            </div>
            <div className="price-tag-box">
              <FaTags size={18} color="black" className="price-tag" />
              <span className="tag-text">
                {/* {getCustomText(productItem.id) || */}
                  {/* productItem.customText2 ||
                  "Headphone"} */}
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
}
export default SingleItem;