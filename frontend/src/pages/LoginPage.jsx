import "../../css/LoginForm.css";
import { Button, Form, Container } from "react-bootstrap";
import { useState } from "react";
import { useUserStore } from "../stores/signup-store";
import { login } from "../actions/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [validated, setValidated] = useState(false);
  const [email, pass, setEmail, setPassword] = useUserStore(
    (state) => [state.email, state.password, state.setEmail, state.setPassword]
  );

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email: email, password: pass };

    if (e.target.checkValidity()) {
      const loggedIn = await login(user);
      if (loggedIn != false) {
        sessionStorage.setItem("token", loggedIn.token);
        navigate("/dashboard");
      }
    } else {
      console.log("invalid form")
    }

    setValidated(true);
  }

  return (
    <Container className="wrapper">
      <h1 className="mb-5">Welcome Back!</h1>
      <Form onSubmit={onSubmit} noValidate validated={validated} className="login">
        <Form.Group className="mb-2">
          <Form.Label>Enter email</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} required className="input" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Enter password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} required className="input" type="password" placeholder="Enter email" />
          <Form.Text>
            <a className="forgotPass" href="#">Forgot password?</a>
          </Form.Text>
        </Form.Group>
        <Button type="submit" className="loginBtn" variant="dark">Log in</Button>
      </Form>
    </Container>
    // <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
    //   <div className="login">
    //     <h2 className="mb-3">Login Form</h2>
    //     <form className='needs-validation'>
    //       <div className="form-group was-validated mb-2">
    //         <label htmlFor="name" className='form-label'>Name</label>
    //         <input type="name" className='form-control' required />
    //         <div className="invalid-feedback">
    //           Please Enter your name
    //         </div>
    //       </div>

    //       <div className="form-group was-validated mb-2">
    //         <label htmlFor='password' className='form-label'>Password</label>
    //         <input type="password" className='form-control' required />
    //         <div className="invalid-feedback">
    //           Please Enter your password
    //         </div>
    //       </div>
    //       <div className='form-group form-check mb-2 mb-2'>
    //         <input type="checkbox" className='form-check-input' />
    //         <label htmlFor="check" className='form-check-label'>Remember me</label>
    //       </div>
    //       <button type="submit" className="btn btn-success w-100 block mt-2">Login</button>
    //     </form>
    //   </div>
    // </div>

  )
}

export default LoginPage;
