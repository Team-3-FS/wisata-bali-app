import React from "react";

const Register = () => {
  return (
    <>
      <div className="tab-content row my-2 px-5">
        <div
          class="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <div className="col-6 mx-auto my-2 border border-dark-0 rounded shadow">
            <form>
              <h3 class="text-center my-3 font-fams">Register</h3>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4 px-4 my-4">
                <input type="email" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">
                  Nama
                </label>
              </div>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4 px-4">
                <input type="email" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">
                  Email
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-4 px-4">
                <input
                  type="password"
                  id="loginPassword"
                  class="form-control"
                />
                <label class="form-label" for="loginPassword">
                  Password
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  class="btn btn-primary btn-block mb-4 text-center"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
