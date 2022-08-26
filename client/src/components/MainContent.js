import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  Login,
  Register,
  Category,
  WisataId,
  UserHomePage,
} from "../pages";

const MainContent = () => {
  return (
    <div className="container p-3">
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>

        <Route path="wisata">
          <Route path=":id" element={<WisataId></WisataId>}></Route>
        </Route>

        <Route path="login" element={<Login></Login>}></Route>

        <Route path="register" element={<Register></Register>}></Route>

        <Route path="category">
          <Route path=":id" element={<Category></Category>}></Route>
        </Route>

        <Route path="user" element={<UserHomePage></UserHomePage>}></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
