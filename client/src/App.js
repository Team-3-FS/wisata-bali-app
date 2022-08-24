import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, MainContent } from "./components";

function App() {
  return (
    <div className="main-page container-fluid">
      <Navbar></Navbar>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
