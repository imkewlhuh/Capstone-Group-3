import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../css/modal.css";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function IVModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
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
            <input type="search" id="form1" class="form-control" placeholder="EX: Brown Jacket"/>
            </Row>
        </div>

        <div className='invinfo'>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMin">
          <Form.Label>Minimum Quantity</Form.Label>
          <Form.Control placeholder="EX:19293">
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control />
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
        </Form.Group>
      </Row>
            
        </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className='invaddb' variant="primary" onClick={handleClose}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
