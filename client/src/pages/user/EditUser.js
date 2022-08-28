import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import { getProfileUser, editProfile } from "../../axios/user/userAxios";

const EditUser = () => {

  const [image, setImage] = useState("http://cdn.onlinewebfonts.com/svg/img_542942.png")
  const [saveImage, setSaveImage] = useState(null)

  const handleUploadChange = (e) =>{
    let uploaded = e.target.files[0]
    setImage(URL.createObjectURL(uploaded))
    setSaveImage(uploaded)
  }

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
  // console.log(getProfile)
  // console.log(formAdd);
  const submitAdd = () => {
    editProfile(formAdd);
    // navigate(`/user/wisata/${params.id}`);
  };
  return (
    <div className="row">
      <div className="col-md-6 mb-8 mx-auto">
        <div className="d-flex flex-row border rounded">
          <div className="p-0 w-25 rounded py-2 mx-2">
            {getProfile.image === null ? (
              <img
                className="card-img-top "
                height="150"
                src={"http://cdn.onlinewebfonts.com/svg/img_542942.png"}
                alt="gambar"
              />
            ) : (
              <img
                className="card-img-top "
                height="150"
                src={"http://localhost:3000/" + getProfile.image}
                alt="gambar"
              />
            )}
          </div>
          <div className="pl-4 pt-2 pr-2 pb-3 w-75 border-left">
            <h4 className="fw-bolder">{getProfile.nama}</h4>
            <h5 className="fw">{getProfile.email}</h5>
            <p className="text-right m-0">
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
                            {getProfile.image === null ? (
                              <img
                                className="card-img-top "
                                height="150"
                                src={image}
                                alt="gambar"
                              />
                            ) : (
                              <img
                                className="card-img-top "
                                height="150"
                                src={
                                  "http://localhost:3000/" + getProfile.image
                                }
                                alt="gambar"
                              />
                            )}
                          </label>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlFile1"></label>
                            <input
                              type="file"
                              className="form-control"
                              id="formFile"
                              accept="image/*"
                              onChange={handleUploadChange}
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
