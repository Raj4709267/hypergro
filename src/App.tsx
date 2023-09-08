import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="m-auto root-container">
      <AllRoutes />
    </div>
  );
}

export default App;
