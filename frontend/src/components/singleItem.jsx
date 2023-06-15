import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FaBell, FaUser, FaTags } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const SingleItem=(props) =>{

    return (
        <Card border="Light" key={props.id}>
        <Card.Img
          className="product-image"
          variant="top"
          src={props.images}
        />
        <Card.Body>
          <Card.Title className="text-center">
            {props.name}
          </Card.Title>
          <Card.Text className="text-center">
            Units: {props.units} | Price: ${props.price}
          </Card.Text>
          <div className="yellow-box">
            {/*Map through tags prop and show the tags*/}
            {/* {something.map(item => (
                <p>{item.item}</p>
            ))} */}
            {props.tags.map(t =>(
                   <div className="price-tag-box">
                   <FaTags size={18} color="black" className="price-tag" />
                   <span className="tag-text">
                    {t.tag}
                   </span>
                 </div>
            ))}
         
            
          </div>
        </Card.Body>
      </Card>
    )
}
export default SingleItem;