import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="tab-content">
        <div
          class="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            <p class="text-center">Login</p>

            {/* <!-- Email input --> */}
            <div class="form-outline mb-4">
              <input type="email" id="loginName" class="form-control" />
              <label class="form-label" for="loginName">
                Email
              </label>
            </div>

            {/* <!-- Password input --> */}
            <div class="form-outline mb-4">
              <input type="password" id="loginPassword" class="form-control" />
              <label class="form-label" for="loginPassword">
                Password
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-block mb-4 text-center"
            >
              Sign in
            </button>

            <div class="text-center">
              <p>
                Not a member? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
