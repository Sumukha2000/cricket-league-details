import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-tab">
      <button onClick={() => navigate("/")}>Home</button>

      <button onClick={() => navigate("/schedule")}>Schedule</button>
      <button onClick={() => navigate("/matchresults")}>Match Results</button>
      <button onClick={() => navigate("/stats")}>Stats</button>
    </div>
  );
}

export default Header;
