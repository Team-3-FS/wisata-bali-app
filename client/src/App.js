import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  MainContent,
  Banner,
  Footer,
  NavbarUser,
  NavbarAdmin,
} from "./components";
import Cookies from "js-cookie";

function App() {
  let getCookies = Cookies.get("user");
  const [checkCookie, setCheckCookie] = useState(getCookies);

  let data = true;
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    checkCookie === undefined ? (data = false) : (data = true);
    setIsLogged(data);
  }, [isLogged]);

  // if (!data) {
  //   let parsing = JSON.parse(checkCookie);
  //   level = parsing.level;
  // }
  // console.log(checkCookie)

  return (
    <div className="main-page container-fluid">
      <Navbar checkCookie={checkCookie} isLogged={isLogged}></Navbar>
      <Banner></Banner>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
