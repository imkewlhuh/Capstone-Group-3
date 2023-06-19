import { useState } from 'react';
import "../../css/modal.css";
import { Row, Col, Form, Modal } from 'react-bootstrap';
import { createItemList } from '../api/itemList';

export default function IVModal(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [count, setCount] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    console.log(name, count, props.businessId);
    await createItemList({name: name, count: parseInt(count), businessId: props.businessId});
    handleClose(); 
    props.refresh();
  }

  return (
    <>
      <button type='button' className='modalbutton' onClick={handleShow}>
        <p>ADD NEW <span className='modalPlus'>+</span></p>
      </button>

      <Modal dialogClassName='mymodal' show={show} onHide={handleClose}>
        
        <Modal.Header className='mheader' closeButton>
          <Modal.Title >Add Category</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{padding: "1em 3em"}}>
        <div className='ivsearch'>
            <Row>
                Category Name
            </Row>
            <Row>
            <input onChange={(e) => setName(e.target.value)} type="search" id="form1" className="form-control" placeholder="EX: Brown Jacket"/>
            </Row>
        </div>

        <div className='invinfo'>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control onChange={(e) => setCount(e.target.value)} />
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


        {/* <div className='expdate'>

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
            
        </div> */}
        </Modal.Body>

        <Modal.Footer>
          <button type='button' className='invaddb' onClick={handleAdd}>
            ADD
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
