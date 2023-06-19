import { Button, Row, Col, Container } from 'react-bootstrap'
import Sidebar from "../../components/Sidebar.jsx";

export default function Profile() {
    return (
        <Container fluid>
      <Row>
        {/* column1 */}
        <Col> 
          
          <Row>
            <h1>name</h1>
          </Row>
          <Row>
          <Image src="holder.js/171x180" rounded />
          </Row>
        </Col>
        {/* column2 */}
        <Col>
          <p>Content for the second column</p>
          <Row>
             <p>Nested row inside the second column</p> 
          </Row>
        </Col>
        <Col>
            <p>Content for the third column</p>
          <Row>
            <p>Nested row inside the third column</p> 
          </Row>
        </Col>
      </Row>
    </Container>
    )
}