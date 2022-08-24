import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../axios/navbarAxios";

const Navbar = () => {
  const [getAllCategory, setGetAllCategory] = useState([]);
  console.log(getAllCategory);

  useEffect(() => {
    getCategory((result) => setGetAllCategory(result.data));
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Wisata Bali Apps
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* category dropdown */}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  {getAllCategory.map((result) => {
                    const { id, nama } = result;
                    return (
                      <li key={id}>
                        <a className="dropdown-item" href="#">
                          {nama}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>

              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#">
                  Category
                </Link>
              </li> */}

              {/* end category drop down*/}

              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
