import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Login, Register, Category } from "../pages";

const MainContent = () => {
  return (
    <div className="container p-3">
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="category">
          <Route path=":id" element={<Category></Category>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainContent;
