import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useBusinessStore, useUserStore } from "../stores/signup-store";

export default function BusinessField(props) {
    const [selectedType, setSelectedType] = useState("");
    const navigate = useNavigate();

    const [setType, setName, setLocation] = useBusinessStore((state) => [state.setType, state.setName, state.setLocation]);

    const name = useUserStore((state) => state.name);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.checkValidity()) {
            if (selectedType === "personal") {
                setType("personal");
                setName(`${name}'s Store`);
                setLocation("Home");
            }
            navigate("/auth/signup/inventory");
        };

        e.target.classList.add('was-validated');
    };

    return (
        <div className="businessField container">
            <h2>What will you use (insert) for?</h2>
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
    )
}