import React, { useState } from "react";
import {
  FaCog,
  FaBell,
  FaSearch,
  FaUser,
  FaCheckSquare,
  FaRegSquare,
  FaPlus,
  FaTrashAlt,
  FaPen,
} from "react-icons/fa";
import Header from "../components/header";

const Settings = () => {
  const [checkboxes, setCheckboxes] = useState(Array(9).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  const squareStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25px",
    height: "25px",
    background: "#ccc",
    margin: "5px",
  };

  const rectangleStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "160px",
    minHeight: "100px",
    borderRadius: "5px",
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "110px",
    height: "30px",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "0 5px",
  };

  const plusIconStyle = {
    fontSize: "1rem",
  };

  const circleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30px",
    height: "30px",
    background: "#ccc",
    borderRadius: "50%",
    marginRight: "10px",
  };

  const userData = [
    {
      name: "Jane Doe",
      email: "jane@biz.com",
      dateAdded: "05/10/2022",
      lastActive: "03/15/2023",
      imageUrl: "images/alet-brown.jpg",
    },
    {
      name: "Tobias Reaper",
      email: "tobias@biz.com",
      dateAdded: "06/20/2022",
      lastActive: "04/25/2023",
      imageUrl: "images/john-smith.jpg",
    },
    {
      name: "Maya Hawk",
      email: "alice.johnson@example.com",
      dateAdded: "07/05/2022",
      lastActive: "05/12/2023",
      imageUrl: "images/emma-davis.jpg",
    },
    {
      name: "Bob Wilson",
      email: "maya@biz.com",
      dateAdded: "08/15/2022",
      lastActive: "06/20/2023",
      imageUrl: "images/leo-demarco.jpg",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@biz.com",
      dateAdded: "09/25/2022",
      lastActive: "07/30/2023",
      imageUrl: "images/sarah-lee.jpg",
    },
    {
      name: "Michael Thompson",
      email: "michael.thompson@biz.com",
      dateAdded: "10/10/2022",
      lastActive: "08/05/2023",
      imageUrl: "images/michael-lee.jpg",
    },
    {
      name: "Olivia Martinez",
      email: "olivia.martinez@biz.com",
      dateAdded: "11/20/2022",
      lastActive: "09/15/2023",
      imageUrl: "images/lucy-kim.jpg",
    },
    {
      name: "William Taylor",
      email: "william.taylor@biz.com",
      dateAdded: "12/05/2022",
      lastActive: "10/25/2023",
      imageUrl: "images/david-johnson.jpg",
    },
    {
      name: "Sophia Anderson",
      email: "sophia.anderson@biz.com",
      dateAdded: "01/15/2023",
      lastActive: "11/05/2023",
      imageUrl: "images/sophiaanderson.jpg",
    },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Side Content */}
      <div
        style={{ background: "#f3f3f3", padding: "20px", minWidth: "200px" }}
      >
        {/* Add your left side content here */}
        <h2>Manage your users and their account permissions here.</h2>
        <p style={{ textDecoration: "underline", color: "blue" }}>
          View all users.
        </p>

        {/* Added rectangles */}
        <div
          style={{ ...rectangleStyle, background: "green", marginTop: "20px" }}
        >
          <h3 style={{ color: "white", textAlign: "center" }}>Admin Users</h3>
          <p style={{ color: "white", textAlign: "center" }}>
            Admins can add and remove users and manage organization-level
            settings.
          </p>
        </div>
        <div
          style={{ ...rectangleStyle, background: "blue", marginTop: "20px" }}
        >
          <h3 style={{ color: "white", textAlign: "center" }}>Account Users</h3>
          <p style={{ color: "white", textAlign: "center" }}>
            Account users can access the inventory, check analytics, growth, as
            well as sustainability.
          </p>
        </div>
      </div>

      {/* Right Side Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Header title="Settings" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              borderBottom: "1px solid black",
              paddingBottom: "5px",
              marginBottom: "10px",
            }}
          >
            <button
              style={{
                ...buttonStyle,
                background: "#ccc",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "160px", // Adjust the width to match the rectangle style
              }}
            >
              User Management
            </button>

            <button style={{ ...buttonStyle, background: "lightblue" }}>
              Teams
            </button>
            <button style={{ ...buttonStyle, background: "lightgreen" }}>
              Permissions
            </button>
            <div style={{ flex: 1 }}></div>
            <div style={{ textAlign: "right" }}>
              <button style={{ ...buttonStyle, background: "blue" }}>
                Add User
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            background: "lightgray",
            padding: "10px",
            display: "flex",
            alignItems: "flex-start",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>
                Name
              </div>
              <div style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>
                <button style={{ ...buttonStyle, background: "orange" }}>
                  User
                </button>
              </div>
              <div style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>
                <button style={{ ...buttonStyle, background: "green" }}>
                  Admin
                </button>
              </div>
              <div style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>
                Date Added
              </div>
              <div style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>
                Last Active
              </div>
            </div>
            <hr style={{ borderTop: "1px solid black", margin: "10px 0" }} />
            {userData.map((user, index) => (
              <div
                key={index}
                style={{
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                  <div style={squareStyle}>
                    {checkboxes[index] ? (
                      <FaCheckSquare
                        style={{ fontSize: "1.5rem" }}
                        onClick={() => handleCheckboxChange(index)}
                      />
                    ) : (
                      <FaRegSquare
                        style={{ fontSize: "1.5rem" }}
                        onClick={() => handleCheckboxChange(index)}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      ...circleStyle,
                      backgroundImage: `url(${user.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    style={{
                      marginLeft: "10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h4 style={{ margin: "0", color: "black" }}>{user.name}</h4>
                    <p
                      style={{ margin: "0", color: "gray", fontSize: "0.8rem" }}
                    >
                      {user.email}
                    </p>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: "0", color: "gray" }}>{user.dateAdded}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: "0", color: "gray" }}>
                    {user.lastActive}
                  </p>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <FaTrashAlt
                    style={{ marginRight: "10px", cursor: "pointer" }}
                  />
                  <FaPen style={{ cursor: "pointer" }} />
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginLeft: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={rectangleStyle}>
              <FaPlus style={{ ...plusIconStyle, color: "blue" }} />
              <p style={{ margin: "0", color: "black" }}>Add User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
