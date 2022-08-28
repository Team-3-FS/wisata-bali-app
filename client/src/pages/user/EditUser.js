import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import { getProfileUser, editProfile } from "../../axios/user/userAxios";

const EditUser = () => {
  const [getProfile, setGetProfile] = useState([]);
  //   console.log(getProfile);

  useEffect(() => {
    getProfileUser((result) => setGetProfile(result));
  }, []);

  const idForm = getProfile.id;
  const emailCookieForm = getProfile.email;
  const passForm = getProfile.pass;
  const [formAdd, setFormAdd] = useState({
    id: 0,
    emailCookie: "",
    nama: "",
    email: "",
    pass: "",
    images: "",
  });

  console.log(formAdd);
  const submitAdd = () => {
    editProfile(formAdd);
    // navigate(`/user/wisata/${params.id}`);
  };
  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          <img
            className="card-img-top "
            height="150"
            src={"http://localhost:3000/" + getProfile.image}
            alt="gambar"
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">Nama :{getProfile.nama}</h5>
              <h5 className="fw-bolder">Email : {getProfile.email}</h5>
              <a
                className="btn btn-sm btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#add"
                onClick={() => {
                  setFormAdd({
                    ...formAdd,
                    id: idForm,
                    emailCookie: emailCookieForm,
                    pass: passForm,
                  });
                }}
              >
                Edit Profile
              </a>

              {/* +++ */}
              <div
                className="modal fade"
                id="add"
                tabIndex={-1}
                aria-labelledby="addLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header text-center">
                      <h5 className="modal-title w-100" id="addLabel">
                        Edit Profile
                      </h5>
                    </div>
                    <div className="modal-body px-3 py-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Foto Profile
                            <img
                              className="card-img-top "
                              height="150"
                              src={"http://localhost:3000/" + getProfile.image}
                              alt="gambar"
                            />
                          </label>
                          <div className="form-group">
                            <label for="exampleFormControlFile1"></label>
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              value={formAdd.images}
                              onChange={(e) =>
                                setFormAdd({
                                  ...formAdd,
                                  images: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            value={formAdd.nama}
                            onChange={(e) =>
                              setFormAdd({
                                ...formAdd,
                                nama: e.target.value,
                              })
                            }
                            required
                            className="form-control"
                            id="name"
                            placeholder={getProfile.nama}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="rating" className="form-label">
                            Email
                          </label>
                          <input
                            type="text"
                            value={formAdd.email}
                            onChange={(e) =>
                              setFormAdd({
                                ...formAdd,
                                email: e.target.value,
                              })
                            }
                            required
                            className="form-control"
                            id="rating"
                            placeholder={getProfile.email}
                          />
                        </div>

                        <div className="mb-3 py-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-dark mx-1"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            onClick={() => submitAdd()}
                            className="btn btn-sm btn-dark"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
