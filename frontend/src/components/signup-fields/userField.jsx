import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/signup-store";

export default function UserField(props) {
    const [show, setShow] = useState(false);
    const togglePass = () => setShow(!show);

    const [name, email, password, setName, setEmail, setPass] = useUserStore(
        (state) => [state.name, state.email, state.password, state.setName, state.setEmail, state.setPassword]
        );
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log([name, email, password]);

        if (e.target.checkValidity()) {
                navigate("/auth/signup/business");
            };

        e.target.classList.add('was-validated');
    };

    return (
        <div className="userField container">
            <h2>Stay organized. Stay (insert name).</h2>
            <form onSubmit={handleSubmit} className="signUp needs-validation my-3" noValidate>
                <div className="formInput mb-2">
                    <label htmlFor="name" className="form-label">Full name</label>
                    <input type="text" className="form-control form-control-sm" id="name" 
                    placeholder="Enter full name" required onChange={(e) => setName(e.target.value)} value={name} />
                    <div className="invalid-feedback response">Please enter your name!</div>
                </div>

                <div className="formInput mb-2">
                    <label htmlFor="email" className="form-label">Enter email</label>
                    <input type="email" className="form-control form-control-sm" id="email" 
                    placeholder="Please enter your email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                    <div className="invalid-feedback response">Invalid email!</div>
                </div>

                <div className="formInput mb-2">
                    <label htmlFor="password" className="form-label">Create password</label>
                    <div className="input-group input-group-sm">
                        <input type={show ? "text" : "password"} className="form-control" id="password" 
                        placeholder="Create your password" required onChange={(e) => setPass(e.target.value)} value={password} />
                        <div className="invalid-feedback invalidPass">This field can not be left blank.</div>
                        <button type="button" onClick={togglePass} className="btn btn-secondary input-group-text">
                            {show ?
                                <i className="bi bi-eye-slash"></i> :
                                <i className="bi bi-eye"></i>
                            }
                        </button>
                    </div>
                </div>

                <div className="formInput mb-2">
                    <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                    <div className="input-group input-group-sm mb-4">
                        <input type={show ? "text" : "password"} className="form-control" id="confirmPassword" placeholder="Create your password" required />
                        <div className="invalid-feedback invalidPass">Password does not match.</div>
                        <button type="button" onClick={togglePass} className="btn btn-secondary input-group-text">
                            {show ?
                                <i className="bi bi-eye-slash"></i> :
                                <i className="bi bi-eye"></i>
                            }
                        </button>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark">Create account</button>
            </form>
        </div>
    )
}