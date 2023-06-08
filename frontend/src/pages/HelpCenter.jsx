import React from "react";
import { BsSearch, BsBell } from "react-icons/bs";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaLightbulb, FaUser, FaDesktop } from "react-icons/fa";
import Header from "../components/header";

const HelpCenter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Container style={{ justifyContent: "center" }}>
        <Header title="Help Center" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#333",
              textAlign: "center",
            }}
          >
            How Can We Help?
          </h2>
          <div
            style={{
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "30px",
                backgroundColor: "#fff",
                padding: "8px",
                border: "2px solid #333",
              }}
            >
              <BsSearch
                size={20}
                style={{
                  color: "#777",
                  marginLeft: "10px",
                }}
              />
              <input
                type="text"
                placeholder="Search..."
                style={{
                  border: "none",
                  outline: "none",
                  marginLeft: "10px",
                  marginRight: "10px",
                  flex: "1",
                  borderRadius: "20px",
                  padding: "6px 10px",
                }}
              />
            </div>
            <button
              style={{
                border: "none",
                outline: "none",
                background: "blue",
                cursor: "pointer",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "6px 12px",
                borderRadius: "20px",
                marginLeft: "10px",
              }}
            >
              Search
            </button>
          </div>
        </div>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaDesktop
                    size={40}
                    style={{ color: "blue", marginRight: "10px" }}
                  />
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Getting Started
                  </Card.Title>
                </div>
                <Card.Text style={{ fontSize: "18px" }}>
                  Get The Basics On Inventory Manager, Adding & Updating Items,
                  And More!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaUser
                    size={40}
                    style={{ color: "purple", marginRight: "10px" }}
                  />
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Billing & Account
                  </Card.Title>
                </div>
                <Card.Text style={{ fontSize: "18px" }}>
                  How To Make Account Changes, Manage, And Update Your Account
                  Settings.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "4px",
                      marginRight: "10px",
                      marginBottom: "-4px",
                    }}
                  >
                    <FaLightbulb size={30} style={{ color: "yellow" }} />
                  </div>
                  <Card.Title style={{ fontWeight: "bold" }}>FAQ</Card.Title>
                </div>
                <Card.Text style={{ fontSize: "18px" }}>
                  Frequently Asked Questions Including Inventory, Etc.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HelpCenter;
