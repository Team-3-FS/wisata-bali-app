import React, { useState } from "react";
import { loginUser } from "../axios/homeAxios";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    pass: "",
  });
  const submitHandler = () => {
    // console.log(form);
    //udah jadi login tapi belom redirect karena belom ada halaman user
    loginUser(form)
  };
  return (
    <>
      <div className="tab-content row my-2 px-5">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <div className="col-6 mx-auto my-2 border border-dark-0 rounded shadow">
            <div>
              <h3 className="text-center my-3 font-fams">Login</h3>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4 px-4 my-4">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <label className="form-label" htmlFor="loginName">
                  Email
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4 px-4">
                <input
                  type="password"
                  id="pass"
                  className="form-control"
                  onChange={(e) => setForm({ ...form, pass: e.target.value })}
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4 text-center"
                  onClick={() => submitHandler()}
                >
                  Sign in
                </button>
              </div>

              <div className="text-center">
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
