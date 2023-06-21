import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FaBell, FaUser, FaTags } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { deleteItemById } from "../api/item";

const SingleItem = (props) => {

  const handleHover = (direction, e) => {
    if (direction === "in") {
      e.target.nextElementSibling.childNodes[3].classList.add("btnHover");

    } else if (direction === "out") {
      e.target.nextElementSibling.childNodes[3].classList.remove("btnHover");

    }
  }

  return (
    <Card className="invCard" style={{ position: "relative" }} key={props.id}>
      <Card.Img
        style={{ transform: "scale(1.15)" }}
        className="product-image"
        variant="top"
        src={props.image}
        onMouseEnter={(e) => handleHover("in", e)}
        onMouseLeave={(e) => handleHover("out", e)}
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
          {props.tags.map((t, i) => (
            <div key={i} className="price-tag-box">
              <FaTags size={18} color="black" className="price-tag" />
              <span className="tag-text">
                {t.tag}
              </span>
            </div>
          ))}


        </div>
        <button type="button" className="listBtn editBtn" onClick={async () => { await deleteItemById(props.id); props.refresh(); }}><i className="bi bi-trash"></i></button>

      </Card.Body>
    </Card>
  )
}
export default SingleItem;