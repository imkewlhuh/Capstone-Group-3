import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import {
  FaUsers,
  FaFilter,
  FaSearch,
  FaEnvelope,
  FaUser,
  FaPencilAlt,
} from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import Header from "./header";

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
            imageUrl: "images/alet-brown.jpg",
          },
          {
            name: "John Smith",
            role: "Developer",
            access: "Products | Tasks | Insights",
            tasks: 105,
            products: 35,
            insights: 56,
            imageUrl: "images/john-smith.jpg",
          },
          {
            name: "Emma Davis",
            role: "Designer",
            access: "Products | Tasks | Insights",
            tasks: 101,
            products: 67,
            insights: 45,
            imageUrl:"images/emma-davis.jpg",
          },
          {
            name: "Sarah Lee",
            role: "Marketing Manager",
            access: "Products | Tasks | Insights",
            tasks: 125,
            products: 80,
            insights: 59,
            imageUrl: "images/sarah-lee.jpg",
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
            tasks: 134,
            products: 65,
            insights: 39,
            imageUrl:"images/leo-demarco.jpg",
          },
          {
            name: "Michael Lee",
            role: "Developer",
            access: "Products | Tasks | Insights",
            tasks: 150,
            products: 56,
            insights: 78,
            imageUrl: "images/michael-lee.jpg",
          },
          {
            name: "Lucy Kim",
            role: "Designer",
            access: "Products | Tasks | Insights",
            tasks: 180,
            products: 68,
            insights: 59,
            imageUrl: "images/lucy-kim.jpg",
          },
          {
            name: "David Johnson",
            role: "Marketing Manager",
            access: "Products | Tasks | Insights",
            tasks: 120,
            products: 89,
            insights: 77,
            imageUrl:"images/david-johnson.jpg",
          },
      ],
    },
  ];

  return (
    <Container>
      <Row>
        <Header title="Teams" />
        <Col className="d-flex justify-content-start align-items-center">
          <Button variant="light" className="mr-2">
            <FaFilter /> Filter Users
          </Button>
          <Form className="d-flex align-items-center position-relative">
            <Form.Control type="text" placeholder="Search" className="mr-2" />
            <FaSearch
              className="search-icon"
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </Form>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <div className="d-flex align-items-center">
            <Form.Check type="checkbox" className="mr-2" />
            <span>Select</span>
            <FaPencilAlt size={16} className="ml-2 mr-2" />
            <span>View All</span>
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
                <Card border="dark">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Form.Check type="checkbox" className="mr-3" />
                      <BsPerson size={20} className="mr-3" />
                    </div>
                    <div>
                      <div className="circle-icon">
                        <FaEnvelope size={16} />
                      </div>
                    </div>
                  </div>
                  <Card.Img
                    variant="top"
                    src={member.imageUrl}
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
