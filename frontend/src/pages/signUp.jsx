import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
    const [show, setShow] = useState(false);
    const togglePass = () => setShow(!show);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (e.target.checkValidity()) {
            navigate("/dashboard");
        }

        e.target.classList.add('was-validated');
    };

    return (
        <div className="container">
            <h1>Create An Account</h1>
            <form onSubmit={handleSubmit} className="signUp needs-validation my-5" noValidate>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Please enter your name" required />
                    <label for="name" className="form-label">Enter your name</label>
                    <div className="invalid-feedback">Please enter your name!</div>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Please enter your email" required />
                    <label for="email" className="form-label">Enter your email</label>
                    <div className="invalid-feedback">Invalid email!</div>
                </div>
                <div className="input-group mb-5">
                    <div className="form-floating">
                        <input type={show ? "text" : "password"} className="form-control" id="password" placeholder="Create your password" required />
                        <label for="password" className="form-label">Create your password</label>
                        <div className="invalid-feedback invalidPass">Invalid password!</div>
                    </div>
                    <button type="button" onClick={togglePass} className="btn btn-secondary input-group-text">
                        {show ?
                            <i class="bi bi-eye-slash"></i> :
                            <i class="bi bi-eye"></i>
                        }
                    </button>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}