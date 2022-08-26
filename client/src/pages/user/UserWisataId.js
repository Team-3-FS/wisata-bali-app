import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { getUserWisataId } from "../../axios/user/userAxios";

const UserWisataId = () => {
  const [getResKomentar, setgetResKomentar] = useState([]);
  const [getResWisata, setgetResWisata] = useState([]);
  const [getImage, setgetImage] = useState([]);
  const params = useParams();
  // console.log(getUserWisataId);

  useEffect(() => {
    getUserWisataId(params.id, (result) =>
      setgetResKomentar(result.resAllKomentar)
    );
  }, [params.id]);

  useEffect(() => {
    getUserWisataId(params.id, (result) => setgetResWisata(result.resWisata));
  }, [params.id]);

  useEffect(() => {
    getUserWisataId(params.id, (result) =>
      setgetImage(result.resWisata.images)
    );
  }, [params.id]);

  // console.log(getImage);

  return (
    <div>
      <h1>USER WISATA ID</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {getImage.map((result) => {
            const { id, image } = result;
            return (
              <div className="carousel-item active" key={id}>
                <img
                  height="500"
                  src={"http://localhost:3000/" + image}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="text-center">
        {/* <!-- Product name--> */}
        <h1 className="fw-bolder">{getResWisata.nama}</h1>
        <h3>{getResWisata.alamat}</h3>
        {/* <!-- Product reviews--> */}
        <div className="d-flex justify-content-center">
          <Rating initialValue={getResWisata.rating} readonly size="25px" />
        </div>
        {/* <!-- Product price--> */}
        {getResWisata.deskripsi}
      </div>

      <div className="container-fluid px-3 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
          {getResKomentar.length > 0 ? (
            getResKomentar.map((result) => {
              const { id, rating, kometar, createdAt, user } = result;
              return (
                <div className="col mb-5" key={id}>
                  <div className="card h-100">
                    <img
                      className="card-img-top "
                      height="150"
                      src={"http://localhost:3000/" + user.image}
                      alt="gambar"
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{user.nama}</h5>
                        <div className="d-flex justify-content-center">
                          <Rating initialValue={rating} readonly size="25px" />
                        </div>
                        <p>{createdAt}</p>
                        {kometar}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top "
                  height="150"
                  src="https://via.placeholder.com/150"
                  alt="gambar"
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Nama Wisata</h5>
                    <div className="d-flex justify-content-center">
                      <Rating initialValue={2} readonly size="25px" />
                    </div>
                    <p>Tanggal Created</p>
                    Komentar
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserWisataId;
