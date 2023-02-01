import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  return (
    <div>
         <Header />
      <h1>Zeiss Premier League : 2023</h1>
      <h2>The official inter department cricket tournament of Zeiss - India</h2>
      <button onClick={() => navigate("/teams")}>Explore Teams</button>
    </div>
  );
}

export default Landing;
