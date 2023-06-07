import { Outlet } from "react-router-dom";
import "../../css/signUpForm.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const bgColors = {
  login: "#7984FF",
  signup: "#40A0F9",
  businessType: "#FFC107",
  inventory: "#CD60FF",
  team: "#96DCA4"
}


export default function AuthLayout() {
  const [color, setColor] = useState();
  const location = useLocation();
  
  useEffect(() => {
    const url = location.pathname;

    if (url.includes("login")) {
      setColor(bgColors.login);
    }

    if (url.includes("signup")) {
      setColor(bgColors.signup);
    }

    if (url.includes("business")) {
      setColor(bgColors.businessType);
    }

    if (url.includes("inventory")) {
      setColor(bgColors.inventory);
    }

    if (url.includes("team")) {
      setColor(bgColors.team);
    }

  }, [location])

  return (
    <div className="signUpForm">
      <div className="formHalf container">
        <Outlet />
      </div>
      <div className="logoHalf" style={{backgroundColor: `${color}`}}>
        <div className="logoGraphic">
          <img src="/images/mainLogo.png" />
        </div>
      </div>
    </div>
  );
}
