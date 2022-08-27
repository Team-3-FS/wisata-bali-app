import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  Login,
  Register,
  Category,
  WisataId,
  UserHomePage,
  AdminUserPage,
  AdminCategoryPage,
  AdminWisataPage,
  UserWisataId,
  AdminKomenPage,
} from "../pages";

const MainContent = () => {
  return (
    <div className="container p-3">
      <Routes>
        {/* HOME PAGE */}
        <Route path="" element={<HomePage></HomePage>}></Route>

        <Route path="wisata">
          <Route path=":id" element={<WisataId></WisataId>}></Route>
        </Route>

        <Route path="login" element={<Login></Login>}></Route>

        <Route path="register" element={<Register></Register>}></Route>

        <Route path="category">
          <Route path=":id" element={<Category></Category>}></Route>
        </Route>

        {/* USER PAGE */}
        <Route path="user" element={<UserHomePage></UserHomePage>}></Route>
        <Route path="user/wisata/:id" element={<UserWisataId></UserWisataId>}></Route>

        {/* ADMIN PAGE */}
        <Route path="admin" element={<AdminWisataPage></AdminWisataPage>}></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
