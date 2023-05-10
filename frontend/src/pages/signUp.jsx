import { Outlet } from "react-router-dom";
import '../../css/signUpForm.css';

export default function AuthLayout(props) {
    return (
        <div className="signUpForm">
            <div className="formHalf container">
                <Outlet />
            </div>
            <div className="logoHalf">
                <div className="logoGraphic">
                    <p>logo or graphic</p>
                </div>
            </div>
        </div>
    )
};