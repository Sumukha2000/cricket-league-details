import { useState } from "react";
import { Route, Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
   
      <Landing />
    </div>
  );
}

export default App;
