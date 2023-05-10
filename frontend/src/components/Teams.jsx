import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import {
  FaUsers,
  FaFilter,
  FaSearch,
  FaEnvelope,
  FaBell,
  FaUser,
} from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

function Teams() {
  const teams = [
    {
      city: "New York",
      members: [
        {
          name: "Alet Brown",
          role: "Account Manager",
          access: "Products | Tasks | Insights",
          tasks: 131,
          products: 31,
          insights: 27,
        },
        {
          name: "John Smith",
          role: "Developer",
          access: "Products | Tasks | Insights",
          tasks: 7,
          products: 2,
          insights: 1,
        },
        {
          name: "Emma Davis",
          role: "Designer",
          access: "Products | Tasks | Insights",
          tasks: 4,
          products: 4,
          insights: 3,
        },
        {
          name: "Sarah Lee",
          role: "Marketing Manager",
          access: "Products | Tasks | Insights",
          tasks: 6,
          products: 1,
          insights: 4,
        },
      ],
    },
    {
      city: "Los Angeles",
      members: [
        {
          name: "Leo DeMarco",
          role: "Account Manager",
          access: "Products | Tasks | Insights",
          tasks: 2,
          products: 6,
          insights: 3,
        },
        {
          name: "Michael Lee",
          role: "Developer",
          access: "Products | Tasks | Insights",
          tasks: 3,
          products: 5,
          insights: 1,
        },
        {
          name: "Lucy Kim",
          role: "Designer",
          access: "Products | Tasks | Insights",
          tasks: 1,
          products: 4,
          insights: 6,
        },
        {
          name: "David Johnson",
          role: "Marketing Manager",
          access: "Products | Tasks | Insights",
          tasks: 4,
          products: 2,
          insights: 2,
        },
      ],
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex align-items-center mb-4">
            <h2 className="mr-2">Teams</h2>
            <FaUsers size={24} />
          </div>
        </Col>
        <Col className="d-flex justify-content-start align-items-center">
          <Button variant="primary" className="mr-2">
            <FaFilter /> Filter Users
          </Button>
          <Form className="d-flex align-items-center">
            <Form.Control type="text" placeholder="Search" className="mr-2" />
            <FaSearch className="search-icon" />
          </Form>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <div className="d-flex align-items-center mr-3">
            <FaBell className="icon-button" />
          </div>
          <div className="d-flex align-items-center mr-3">
            <FaUser className="icon-button" />
          </div>
          <div className="d-flex align-items-center mr-3">
            <FaSearch className="icon-button" />
          </div>
        </Col>
      </Row>
      {teams.map((team) => (
        <div key={team.city}>
          <Row>
            <Col>
              <h2 className="mb-4">{team.city}</h2>
            </Col>
          </Row>
          <Row>
            {team.members.map((member, index) => (
              <Col key={index} xs={12} md={6} lg={3}>
                <Card border="warning">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Form.Check type="checkbox" className="mr-2" />
                      <BsPerson size={20} className="mr-2" />
                    </div>
                    <div>
                      <FaEnvelope size={24} />
                    </div>
                  </div>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150x150"
                    className="rounded-circle mx-auto my-3"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <Card.Body>
                    <Card.Text>{member.name}</Card.Text>
                    <Card.Text>{member.role}</Card.Text>
                    <Card.Text>{member.access}</Card.Text>
                    <Card.Text>Tasks: {member.tasks}</Card.Text>
                    <Card.Text>Products: {member.products}</Card.Text>
                    <Card.Text>Insights: {member.insights}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default Teams;

