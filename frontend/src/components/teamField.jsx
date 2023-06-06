import { signup, login } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import { useUserStore, useBusinessStore } from "../stores/signup-store";

export default function TeamField(props) {
    const navigate = useNavigate();

    const [name, email, password] = useUserStore((state) => [state.name, state.email, state.password]);

    const [businessName, type, location] = useBusinessStore((state) => [state.name, state.type, state.location]);

    const signUpBody = {
        name: name,
        email: email,
        password: password,
        business: {
            create: {
                type: type,
                name: businessName,
                location: location
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (e.target.checkValidity()) {
            console.log(signUpBody);
            const response = await signup(signUpBody);
            if (response != false) {
                const loggedIn = await login({email: email, password: password});
                sessionStorage.setItem("token", loggedIn.token);
                navigate("/dashboard");
            };
        };

        e.target.classList.add('was-validated');
    };

    return (
        <div className="businessField container">
            <h2>Do you have a team?</h2>
            <p className="mb-5">Add your team members to collaborate seamlessly.</p>
            <form onSubmit={handleSubmit} className="businessForm needs-validation" noValidate>
                <input type="radio" className="btn-check" name="options-outlined" id="personal-outlined" autoComplete="off" required />
                <label className="businessBtn btn btn-outline mb-3" htmlFor="personal-outlined">
                    <h5>Yes, I have a team</h5>
                    <p>Customize and onboard team members</p>
                </label>

                <input type="radio" className="btn-check" name="options-outlined" id="business-outlined" autoComplete="off" required />
                <label className="businessBtn btn btn-outline mb-5" htmlFor="business-outlined">
                    <h5>No, I'm a solo act</h5>
                    <p>I am the only person managing my inventory</p>
                </label>
                <div className="invalid-feedback invalidTeam">Please make a selection.</div>

                <button type="submit" className="btn btn-dark">Finish and complete sign up</button>
            </form>
        </div>
    )
}