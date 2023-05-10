import { useNavigate } from "react-router-dom";

export default function TeamField(props) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.checkValidity()) {
            navigate("/dashboard");
        };

        e.target.classList.add('was-validated');
    };

    return (
        <div className="businessField container">
            <h2>Do you have a team?</h2>
            <p className="mb-5">Add your team members to collaborate seamlessly.</p>
            <form onSubmit={handleSubmit} className="businessForm needs-validation" noValidate>
                <input type="radio" class="btn-check" name="options-outlined" id="personal-outlined" autocomplete="off" required />
                <label class="businessBtn btn btn-outline mb-3" for="personal-outlined">
                    <h5>Yes, I have a team</h5>
                    <p>Customize and onboard team members</p>
                </label>

                <input type="radio" class="btn-check" name="options-outlined" id="business-outlined" autocomplete="off" required />
                <label class="businessBtn btn btn-outline mb-5" for="business-outlined">
                    <h5>No, I'm a solo act</h5>
                    <p>I am the only person managing my inventory</p>
                </label>
                <div className="invalid-feedback invalidTeam">Please make a selection.</div>

                <button type="submit" className="btn btn-dark">Finish and complete sign up</button>
            </form>
        </div>
    )
}