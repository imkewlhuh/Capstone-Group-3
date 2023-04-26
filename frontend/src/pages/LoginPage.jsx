import React from "react";
import "../LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Login Form</h2>
        <form className='needs-validation'>
        <div className="form-group was-validated mb-2">
          <label htmlFor="name" className='form-label'>Name</label>
          <input type="name"  className='form-control' required />
          <div className="invalid-feedback">
            Please Enter your name
          </div>
        </div>
        
        <div className="form-group was-validated mb-2">
          <label htmlFor='password' className='form-label'>Password</label>
          <input type="password" className='form-control' required />
          <div className="invalid-feedback">
            Please Enter your password
        </div>
        </div>
        <div className='form-group form-check mb-2 mb-2'>
          <input type="checkbox"className='form-check-input' />
          <label htmlFor="check" className='form-check-label'>Remember me</label>
          </div>
         <button type="submit" className="btn btn-success w-100 block mt-2">Login</button>
        </form>
     </div>
     </div>

     )
     }

export default LoginPage;
