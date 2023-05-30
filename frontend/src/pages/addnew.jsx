import React from "react"
import { useState } from "react"
import "../../css/addnew.css";
import { FaBell, FaUser, FaSearch} from "react-icons/fa";
import Button from 'react-bootstrap/Button';


export default function AddNew(){
    return(
        <div className="addContainer">
            <div className="addHeader">
                <div className="addHello">
                <h1 className="mb-0">Add New Product</h1>
            </div>
            <div className="buttonicons">
                <i className="bi bi-bell bell"></i>
                <i className="bi bi-search magnify"></i>
                <i className="bi bi-person-circle avatar"></i>
            </div>
            </div>
            <div className="subheader">
                <div className="backbutton">
                <Button variant="primary">Back to products</Button>{' '}
                </div>
            </div>
            <div className="description">
                <h5>Description</h5>
            <div class="input-group">
            <div class="form-outline">
            <label class="form-label" for="form1">Product Name</label>
            <input type="search" id="form1" class="form-control"/>
            
            </div>
                {/* <button type="button" class="btn btn-primary">
                    <i class="FaSearch"></i>
                </button> */}
        </div>
            </div>
        </div>
    )
}
