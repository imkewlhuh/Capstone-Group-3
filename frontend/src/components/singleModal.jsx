import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../css/modal.css";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { addItem } from '../api/item';

export default function SingleModal(props) {
  const [show, setShow] = useState(false);
  const [count,setCount] = useState(0)
  const [quantity,setQuantity] = useState(0)
  const [minimumQuantity,setMinimumQuantity] = useState(0)
  const [price,setPrice]= useState(0)
  const [name,setName]= useState("")
  const [sku,setSKU]= useState("")
  const [tags,setTags]=useState("")


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    const handleAdd = () => {
      handleClose(); 
      addItem({name: name,count: parseInt(count), quantity,price,sku,listId:props.list,tags:tags.split(",")});
    }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        ADD NEW +
      </Button>

      <Modal dialogClassName='mymodal' show={show} onHide={handleClose}>
        
        <Modal.Header className='mheader' closeButton>
          <Modal.Title >Add Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className='ivsearch'>
            <Row>
                Product Name
            </Row>
            <Row>
            <input type="search" id="form1" class="form-control" placeholder="EX: Brown Jacket" onChange={(e)=>setName(e.target.value)}/>
            </Row>
        </div>

        <div className='invinfo'>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control onChange={(e)=>setQuantity(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMin">
          <Form.Label>Minimum Quantity</Form.Label>
          <Form.Control placeholder="EX:19293"/>
          <Form.Control onChange={(e)=>setMinimumQuantity(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control onChange={(e)=>setPrice(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSKU">
          <Form.Label>SKU</Form.Label>
          <Form.Control onChange={(e)=>setSKU(e.target.value)}/>
        </Form.Group>

      </Row>
      <Row>
      
      <Form.Group as={Col} controlId="formGridTags">
          <Form.Label>Tags (Please separate with commas)</Form.Label>
          <Form.Control onChange={(e)=>setTags(e.target.value)}/>
        </Form.Group>
      </Row>
        </div>

        <div className='dragdrop'>
        <div>
          <p>Drag and drop your file here or Upload</p>
        </div> 

        <form id="form-file-upload">
      <input type="file" id="input-file-upload" multiple={true} />
      <label id="label-file-upload" htmlFor="input-file-upload">
      </label>
    </form>
        </div>


        <div className='expdate'>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMonth">
          <Form.Label>Month</Form.Label>
          <Form.Control placeholder='EX:Nov' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Date</Form.Label>
          <Form.Control placeholder="EX:28">
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridYear">
          <Form.Label>Date</Form.Label>
          <Form.Control placeholder='EX:2022' />
          {/* </Form.Control> */}
        </Form.Group>
      </Row>
            
        </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className='invaddb' variant="primary" onClick={handleAdd}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

