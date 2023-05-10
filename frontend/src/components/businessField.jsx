import { useNavigate } from "react-router-dom";

export default function BusinessField(props) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.checkValidity()) {
            navigate("/auth/inventory");
        };

        e.target.classList.add('was-validated');
    };

    return (
        <div className="businessField container">
            <h2>What will you use (insert) for?</h2>
            <p className="mb-5">Let us customize your experience to best fit your needs.</p>
            <form onSubmit={handleSubmit} className="businessForm needs-validation" noValidate>
                <input type="radio" class="btn-check" name="options-outlined" id="personal-outlined" autocomplete="off" required />
                <label class="businessBtn btn btn-outline mb-3" for="personal-outlined">
                    <h4>Personal</h4>
                    <p>I am managing my own items at home</p>
                </label>

                <input type="radio" class="btn-check" name="options-outlined" id="business-outlined" autocomplete="off" required />
                <label class="businessBtn btn btn-outline mb-5" for="business-outlined">
                    <h4>Business</h4>
                    <p>I am managing items in a workspace</p>
                </label>
                <div className="invalid-feedback invalidBusiness">Please make a selection.</div>

                <button type="submit" className="btn btn-dark">Next</button>
            </form>
        </div>
    )
}