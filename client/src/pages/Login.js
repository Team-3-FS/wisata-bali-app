import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
            <form>
              <h3 className="text-center my-3 font-fams">Login</h3>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4 px-4 my-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" for="loginName">
                  Email
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4 px-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
                <label className="form-label" for="loginPassword">
                  Password
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4 text-center"
                >
                  Sign in
                </button>
              </div>

              <div className="text-center">
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
