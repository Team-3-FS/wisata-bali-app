import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";

const MainContent = () => {
  return (
    <div className="container p-3">
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
