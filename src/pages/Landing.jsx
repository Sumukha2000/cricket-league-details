import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  return (
    <div>
         <Header />
      <h1 className="zpl-title">Zeiss Premier League : 2023</h1>
      <h2 className="zpl-description">The official inter-department cricket tournament of Zeiss - India</h2>
      <button onClick={() => navigate("/teams")}>Explore Teams</button>
    </div>
  );
}

export default Landing;
