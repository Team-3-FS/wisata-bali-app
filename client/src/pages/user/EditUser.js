import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfileUser, editProfile } from "../../axios/user/userAxios";

const EditUser = () => {
  const param = useParams();
  const { id } = param;
  const [getProfile, setGetProfile] = useState([]);
  //   console.log(getProfile);

  useEffect(() => {
    getProfileUser((result) => setGetProfile(result));
  }, []);

  const idForm = getProfile.id;
  const emailCookieForm = getProfile.email;
  const passForm = getProfile.pass;
  const [formAdd, setFormAdd] = useState({
    nama: "",
    email: "",
    pass: "",
    images: "",
  });

  const submitEdit = () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("emailCookie", emailCookieForm);
    formData.append("nama", formAdd.nama);
    formData.append("email", formAdd.email);
    formData.append("pass", formAdd.pass);
    formData.append("images", formAdd.images);
    editProfile(formData);
  };

  console.log(formAdd);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 mx-auto">
          <div className="card h-100">
            <img
              className="card-img-top rounded"
              height="150"
              src={"http://localhost:3000/" + getProfile.image}
              alt="gambar"
            />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">Nama : {getProfile.nama}</h5>
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
                      nama: getProfile.nama,
                      email: getProfile.email,
                    });
                  }}
                >
                  Edit Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* +++ */}
      <div className="modal fade" id="add" tabIndex={-1} aria-labelledby="addLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title w-100" id="addLabel">
                Edit Profile
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              <form>
                <div className="row">
                  <div className="col-6 mx-auto ">
                    <img
                      className="card-img-top rounded"
                      height="200px"
                      width="auto"
                      src={"http://localhost:3000/" + getProfile.image}
                      alt="gambar"
                    />
                  </div>
                </div>
                <hr></hr>
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
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formAdd.email}
                    onChange={(e) =>
                      setFormAdd({
                        ...formAdd,
                        email: e.target.value,
                      })
                    }
                    required
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) =>
                      setFormAdd({
                        ...formAdd,
                        pass: e.target.value,
                      })
                    }
                    required
                    className="form-control"
                    id="pass"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlFile1" className="form-label">
                    Foto
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleFormControlFile1"
                    onChange={(e) =>
                      setFormAdd({
                        ...formAdd,
                        images: e.target.files[0],
                      })
                    }
                  />
                </div>
                <div className="mb-3 py-2">
                  <button type="button" className="btn btn-sm btn-dark mx-1" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" onClick={() => submitEdit()} className="btn btn-sm btn-dark">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
