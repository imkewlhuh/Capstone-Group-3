import { useNavigate } from "react-router-dom";
import Select from 'react-select';

export default function InventoryField(props) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (e.target.checkValidity()) {
            navigate("/auth/team");
        };

        e.target.classList.add('was-validated');
    };

    const options = [
        { value: "E-commerce products", label: "E-commerce products" },
        { value: "My personal belongings", label: "My personal belongings" },
        { value: "Materials for manufacturing", label: "Materials for manufacturing" },
        { value: "Items being sold at in-person locations", label: "Items being sold at in-person locations" },
        { value: "Hardware", label: "Hardware" },
        { value: "Clothing, shoes, bags, accessories, etc.", label: "Clothing, shoes, bags, accessories, etc." },
        { value: "Items to rent out", label: "Items to rent out" }
    ]

    return (
        <div className="inventoryField container">
            <h2>Tell us a little more about your inventory.</h2>
            <p className="mb-5">More details, the better.</p>
            <form onSubmit={handleSubmit} className="inventoryForm needs-validation" noValidate>

                {/* <select className="form-select form-select-sm" required>
                    <option value="" disabled selected hidden>What are you keeping track of?</option>
                    <option>E-commerce products</option>
                    <option>My personal belongings</option>
                    <option>Materials for manufacturing</option>
                    <option>Items being sold at in-person locations</option>
                    <option>Hardware</option>
                    <option>Clothing, shoes, bags, accessories, etc.</option>
                    <option>Items to rent out</option>
                </select> */}

                <Select
                    options={options}
                    isMulti
                    className="form-select-sm"
                    required
                />

                <div className="invalid-feedback invalidInventory">Please enter a field.</div>

                <button type="submit" className="btn btn-dark">Next</button>
            </form>
        </div>
    )
}