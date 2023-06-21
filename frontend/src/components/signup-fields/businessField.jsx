import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useBusinessStore, useUserStore } from "../../stores/signup-store";

export function BusinessForm(props) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.checkValidity()) {
            navigate("../inventory");
        };

        e.target.classList.add('was-validated');
    }

    return (
        <div className="businessField container">
            <h2>Enter your Business Data</h2>
            <p className="mb-5">Let us customize your experience to best fit your needs.</p>
            <form onSubmit={handleSubmit} className="businessForm needs-validation" noValidate>
                <div className="formInput mb-3">
                    <label htmlFor="name" className="form-label">
                        Business Name
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Enter the Business Name"
                        required
                        onChange={(e) => props.setName(e.target.value)}
                    />
                    <div className="invalid-feedback response">Enter your business name.</div>
                </div>

                <div className="formInput mb-5">
                    <label htmlFor="businessLocation" className="form-label">
                        Location of the Business
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="businessLocation"
                        placeholder="Please enter the location"
                        required
                        onChange={(e) => props.setLocation(e.target.value)}
                    />
                    <div className="invalid-feedback response">Enter your business location.</div>
                </div>
                <button type="submit" className="btn btn-dark">Next</button>

            </form>
        </div>
    )
}

export default function BusinessField(props) {
    const [selectedType, setSelectedType] = useState("");
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const [setType, setName, setLocation] = useBusinessStore((state) => [state.setType, state.setName, state.setLocation]);

    const name = useUserStore((state) => state.name);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.checkValidity()) {
            if (showForm === true && selectedType === "business") {

            } else if (selectedType === "business" && showForm === false) {
                setType("business");
                setShowForm(true);
            } else if (selectedType === "personal") {
                setType("personal");
                setName(`${name}'s Store`);
                setLocation("Home");
                navigate("/auth/signup/inventory");
            }
        };

        e.target.classList.add('was-validated');
    };

    return (
        <>
            {!showForm ?
                <div className="businessField container" >
                    <h2>What will you use InventGenie for?</h2>
                    <p className="mb-5">Let us customize your experience to best fit your needs.</p>
                    <form onSubmit={handleSubmit} className="businessForm needs-validation" noValidate>
                        <input onChange={() => setSelectedType("personal")} type="radio" className="btn-check" name="options-outlined" id="personal-outlined" autoComplete="off" required />
                        <label className="businessBtn btn btn-outline mb-3" htmlFor="personal-outlined">
                            <h4>Personal</h4>
                            <p>I am managing my own items at home</p>
                        </label>

                        <input onChange={() => setSelectedType("business")} type="radio" className="btn-check" name="options-outlined" id="business-outlined" autoComplete="off" required />
                        <label className="businessBtn btn btn-outline mb-5" htmlFor="business-outlined">
                            <h4>Business</h4>
                            <p>I am managing items in a workspace</p>
                        </label>
                        <div className="invalid-feedback invalidBusiness">Please make a selection.</div>

                        <button type="submit" className="btn btn-dark">Next</button>
                    </form>
                </div>
                :
                <BusinessForm setName={setName} setLocation={setLocation} />
            }
        </>
    )
}