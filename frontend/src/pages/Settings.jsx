import React, { useState } from 'react';
import { FaCog, FaBell, FaSearch, FaUser, FaCheckSquare, FaRegSquare, FaPlus, FaTrashAlt, FaPen } from 'react-icons/fa';

const Settings = () => {
  const [checkboxes, setCheckboxes] = useState(Array(9).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  const squareStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25px',
    height: '25px',
    background: '#ccc',
    margin: '5px',
  };

  const rectangleStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '160px',
    minHeight: '100px',
    borderRadius: '5px',
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '110px',
    height: '30px',
    background: '#fff',
    border: '1px solid black',
    borderRadius: '5px',
  };

  const plusIconStyle = {
    fontSize: '1rem',
  };

  const circleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    background: '#ccc',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const userData = [
    { name: 'Jane Doe', email: 'jane@biz.com', dateAdded: '05/10/2022', lastActive: '03/15/2023' },
    { name: 'Tobias Reaper', email: 'tobias@biz.com', dateAdded: '06/20/2022', lastActive: '04/25/2023' },
    { name: 'Maya Hawk', email: 'alice.johnson@example.com', dateAdded: '07/05/2022', lastActive: '05/12/2023' },
    { name: 'Bob Wilson', email: 'maya@biz.com', dateAdded: '08/15/2022', lastActive: '06/20/2023' },
    { name: 'Emily Davis', email: 'emily.davis@biz.com', dateAdded: '09/25/2022', lastActive: '07/30/2023' },
    { name: 'Michael Thompson', email: 'michael.thompson@biz.com', dateAdded: '10/10/2022', lastActive: '08/05/2023' },
    { name: 'Olivia Martinez', email: 'olivia.martinez@biz.com', dateAdded: '11/20/2022', lastActive: '09/15/2023' },
    { name: 'William Taylor', email: 'william.taylor@biz.com', dateAdded: '12/05/2022', lastActive: '10/25/2023' },
    { name: 'Sophia Anderson', email: 'sophia.anderson@biz.com', dateAdded: '01/15/2023', lastActive: '11/05/2023' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginLeft: '20px' }}>
            <FaCog style={{ fontSize: '2rem' }} />
          </div>
          <div>
            <h1 style={{ margin: '0', marginLeft: '10px' }}>Settings</h1>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div style={circleStyle}>
            <FaBell style={{ fontSize: '1.5rem' }} />
          </div>
          <div style={circleStyle}>
            <FaSearch style={{ fontSize: '1.5rem' }} />
          </div>
          <div style={circleStyle}>
            <FaUser style={{ fontSize: '1.5rem' }} />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', width: '100%' }}>
        <button
          style={{
            fontSize: '1.2rem',
            border: 'none',
            background: '#ccc',
            padding: '10px',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          User Management
        </button>
        <button
          style={{
            fontSize: '1.2rem',
            border: 'none',
            background: '#ccc',
            padding: '10px',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          Teams
        </button>
        <button
          style={{ fontSize: '1.2rem', border: 'none', background: '#ccc', padding: '10px', borderRadius: '5px' }}
        >
          Permissions
        </button>
      </div>
      <div style={{ marginTop: '10px', background: 'lightgray', padding: '10px', display: 'flex', alignItems: 'flex-start', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, fontWeight: 'bold' }}>Name</div>
            <div style={{ flex: 1, fontWeight: 'bold' }}>User</div>
            <div style={{ flex: 1, fontWeight: 'bold' }}>Admin</div>
            <div style={{ flex: 1, fontWeight: 'bold' }}>Date Added</div>
            <div style={{ flex: 1, fontWeight: 'bold', display: 'flex', justifyContent: 'flex-end' }}>Actions</div>
          </div>
          {userData.map((user, index) => (
            <div
              key={index}
              style={{
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div style={squareStyle}>
                  {checkboxes[index] ? (
                    <FaCheckSquare style={{ fontSize: '1.5rem' }} onClick={() => handleCheckboxChange(index)} />
                  ) : (
                    <FaRegSquare style={{ fontSize: '1.5rem' }} onClick={() => handleCheckboxChange(index)} />
                  )}
                </div>
                <div style={circleStyle}></div>
                <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ margin: '0', color: 'black' }}>{user.name}</h4>
                  <p style={{ margin: '0', color: 'gray', fontSize: '0.8rem' }}>{user.email}</p>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0', color: 'black', fontSize: '0.8rem' }}>{user.dateAdded}</p>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0', color: 'black', fontSize: '0.8rem' }}>{user.lastActive}</p>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <FaTrashAlt style={{ fontSize: '1.5rem', marginRight: '10px', cursor: 'pointer' }} />
                <FaPen style={{ fontSize: '1.5rem', marginRight: '10px', cursor: 'pointer' }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', marginLeft: '10px' }}>
          <div style={{ ...rectangleStyle, background: 'green' }}>
            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
              <h3 style={{ margin: '0', color: 'white' }}>Admin Users</h3>
            </div>
            <p style={{ margin: '0', color: 'white' }}>
              Admins can add and remove users and manage organization level settings.
            </p>
            <div style={buttonStyle}>
              <FaPlus style={plusIconStyle} />
              <span style={{ marginLeft: '5px' }}>Add User</span>
            </div>
          </div>
          <div style={{ ...rectangleStyle, background: 'blue' }}>
            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
              <h3 style={{ margin: '0', color: 'white' }}>Account Users</h3>
            </div>
            <p style={{ margin: '0', color: 'white' }}>
              Account users can access the inventory, check analytics, and monitor growth as well as sustainability.
            </p>
          </div>
          <div style={rectangleStyle}>
            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
              <h3 style={{ margin: '0' }}>Manage users and their account permissions here</h3>
            </div>
            <p style={{ margin: '0' }}>
              <span style={{ color: 'blue', textDecoration: 'underline' }}>View All Users</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

