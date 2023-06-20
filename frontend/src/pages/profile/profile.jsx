import { Button, Row, Col, Container } from 'react-bootstrap'
import Sidebar from "../../components/Sidebar.jsx";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function Profile() {
    return (
        <Container fluid>
      <Row>
        {/* column1 */}
        <Col md={2}> 
          
          <Row>
            <h1>name</h1>
          </Row>
          <Row>
          <Image src="holder.js/171x180" rounded />
          </Row>
        </Col>
        {/* column2 */}
        <Col md={8}>
          {/*</Col>Content for the second column*/}
          <Row>
            {/* <p>Nested row inside the second column</p> */}
             <Button variant="link">At a glance</Button>
             <Button variant="link">Activity Feed</Button>
             <Button variant="link">Custom Reports</Button>

          </Row>
          <Row>
           {/* <p>second nested row</p>*/}
            <div>
              <Button variant="link">Post</Button>
            <ButtonGroup aria-label="Basic example">
            <Button variant="primary">Poll</Button>
            <Button variant="secondary">Question</Button>
             </ButtonGroup>
             </div>
             <div>
             <Button variant="secondary" size="lg">
              What are you working on?
            </Button>
            <Button as="input" type="submit" value="Submit" />
            </div>
          </Row>
          <Row>
            <p>third nested row</p>
            </Row>
          <Row>
            <p>fourth nested row</p>
            </Row>
        </Col>
        <Col md={2}>
            <p>Content for the third column</p>
          <Row>
            <p>Nested row inside the third column</p> 
          </Row>
          <Row>

          </Row>
          <Row>

          </Row>
          <Row>
            <p>Company   inventGenie</p>
            <p>Title     sales manager</p>
            <p>Team Lead    Alet Brown</p>
            <p>Email         </p>
            <p>Phone      (201)123-4567</p>
            <p>Location    PST Los Angeles</p>
          </Row>
        </Col>
      </Row>
    </Container>
    )
}