import { getWisatas, getWisataById, addWisata, delWisata, updWisata } from "../../axios/admin/adminWisataAxios";
import { getCategories, getCategoryById } from "../../axios/admin/adminCategoryAxios";
import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

const AdminWisataPage = () => {
  const [dataWisata, setDataWisata] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dataOneWisata, setDataOneWisata] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    getWisatas((res) => setDataWisata(res));
    getCategories((res) => setCategories(res));
  }, []);

  const [formAdd, setFormAdd] = useState({
    nama: "",
    alamat: "",
    deskripsi: "",
    categoryId: "",
  });

  const submitAdd = () => {
    addWisata(formAdd);
  };

  const btnDetail = (id) => {
    getWisataById(id, (res) => {
      setDataOneWisata(res.resWisata);
      setImages(res.tempImg);
    });
  };

  const btnEdit = (id) => {
    getWisataById(id, (res) => {
      // setDataOneWisata(res.resWisata);
      // setImages(res.tempImg);
    });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mx-auto border my-1 py-3 rounded">
          <h4 className="text-center">Data Wisata</h4>
          <a className="btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#add">
            Tambah Wisata
          </a>
          <div className="table-responsive text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nama Wisata</th>
                  <th scope="col">Alamat</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Kategori</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {dataWisata.map((wis, index) => {
                  const { id, nama, alamat, rating } = wis;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>
                        <a data-bs-toggle="modal" onClick={() => btnDetail(id)} data-bs-target="#detail">
                          {nama}
                        </a>
                      </td>
                      <td>{alamat}</td>
                      <td>{parseFloat(rating).toFixed(2)}</td>
                      <td>{wis.category.nama}</td>
                      <td>
                        <a
                          className="btn btn-sm btn-dark mx-1"
                          onClick={() => btnEdit(id)}
                          data-bs-toggle="modal"
                          data-bs-target="#edit"
                        >
                          Edit
                        </a>
                        <a className="btn btn-sm btn-dark" onClick={() => delWisata(id)}>
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* add modal */}
      <div className="modal fade" id="add" tabIndex={-1} aria-labelledby="addLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title w-100" id="addLabel">
                Tambah Data Wisata
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              <form>
                <div className="row">
                  {/* batas isi */}
                  <div className="col-12 mb-3">
                    <label htmlFor="nama" className="form-label">
                      Nama Wisata
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setFormAdd({ ...formAdd, nama: e.target.value })}
                      required
                      className="form-control"
                      id="nama"
                      placeholder="Masukkan nama wisata..."
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label htmlFor="alamat" className="form-label">
                      Alamat
                    </label>
                    <textarea
                      placeholder="Masukkan alamat..."
                      className="form-control"
                      required
                      onChange={(e) => setFormAdd({ ...formAdd, alamat: e.target.value })}
                      id="alamat"
                      rows={2}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="des" className="form-label">
                      Deskripsi
                    </label>
                    <textarea
                      placeholder="Masukkan deskripsi..."
                      className="form-control"
                      required
                      onChange={(e) => setFormAdd({ ...formAdd, deskripsi: e.target.value })}
                      id="des"
                      rows={7}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-4 mb-3">
                    <label htmlFor="pass" className="form-label">
                      Kategori
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => setFormAdd({ ...formAdd, categoryId: e.target.value })}
                      required
                      aria-label="Default select example"
                    >
                      <option value={""}>Pilih kategori...</option>
                      {categories.map((cat) => {
                        const { id, nama } = cat;
                        return (
                          <option key={+id} value={id}>
                            {nama}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-8 mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Foto
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                  {/* batas isi */}
                </div>
                <div className="mb-3 py-2">
                  <button type="button" className="btn btn-sm btn-dark mx-1" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button onClick={() => submitAdd()} type="submit" className="btn btn-sm btn-dark">
                    Tambah
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* edit modal */}
      <div className="modal fade" id="edit" tabIndex={-1} aria-labelledby="editLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title w-100" id="editLabel">
                Ubah Data Wisata
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              <form>
                <div className="row">
                  {/* batas isi */}
                  <div className="col-12 mb-3">
                    <label htmlFor="nama" className="form-label">
                      Nama Wisata
                    </label>
                    <input type="text" required className="form-control" id="nama" placeholder="Masukkan nama wisata..." />
                  </div>

                  <div className="col-12 mb-3">
                    <label htmlFor="alamat" className="form-label">
                      Alamat
                    </label>
                    <textarea
                      placeholder="Masukkan alamat..."
                      className="form-control"
                      required
                      id="alamat"
                      rows={2}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="des" className="form-label">
                      Deskripsi
                    </label>
                    <textarea
                      placeholder="Masukkan deskripsi..."
                      className="form-control"
                      required
                      id="des"
                      rows={7}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-4 mb-3">
                    <label htmlFor="pass" className="form-label">
                      Kategori
                    </label>
                    <select className="form-select" required aria-label="Default select example">
                      <option defaultValue={""}>Pilih kategori...</option>
                      <option value="pantai">Pantai</option>
                      <option value="danau">Danau</option>
                      <option value="dll">dll</option>
                    </select>
                  </div>
                  <div className="col-8 mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Foto
                    </label>
                    <div className="input-group">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                      <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                        Simpan
                      </button>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Foto
                    </label>
                    <div className="row">
                      <div className="col-auto">
                        <img
                          onDoubleClick={() => alert("delete image!")}
                          src="http://localhost:3000/assets/default.jpeg"
                          className="rounded center-cropped"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                  {/* batas isi */}
                </div>
                <div className="mb-3 py-2">
                  <button type="button" className="btn btn-sm btn-dark mx-1" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-sm btn-dark">
                    Ubah
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* detail modal */}
      <div className="modal fade" id="detail" tabIndex={-1} aria-labelledby="detailLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title w-100" id="detailLabel">
                Detail Wisata
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              <div className="row">
                <div className="col-5">
                  <div>
                    {/* looping image */}
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        {images.length !== 0 ? (
                          images.map((result) => {
                            const { id, image } = result;
                            return (
                              <div className="carousel-item active" key={id}>
                                <img
                                  onDoubleClick={() => alert("delete image!")}
                                  src={"http://localhost:3000/" + image}
                                  className="rounded detail-foto"
                                  alt="..."
                                />
                              </div>
                            );
                            {
                              /* d-block w-100 */
                            }
                          })
                        ) : (
                          <img
                            onDoubleClick={() => alert("delete image!")}
                            src="http://localhost:3000/assets/default.jpeg"
                            className="rounded detail-foto"
                            alt="..."
                          />
                        )}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    {/* looping image array */}
                  </div>
                  <div className="d-flex justify-content-center my-3">
                    <Rating ratingValue={dataOneWisata.rating * 10} readonly size="40px" />
                  </div>
                </div>
                <div className="col-7">
                  <table>
                    <tbody>
                      <tr>
                        <td width={"100px"}>Nama Wisata</td>
                        <td width={"15px"}>:</td>
                        <td>{dataOneWisata.nama}</td>
                      </tr>
                      <tr>
                        <td width={"100px"}>Kategori</td>
                        <td width={"15px"}>:</td>
                        <td>{dataOneWisata.categoryId}</td>
                      </tr>
                      <tr>
                        <td width={"100px"}>Alamat</td>
                        <td width={"15px"}>:</td>
                        <td>{dataOneWisata.alamat}</td>
                      </tr>
                      <tr>
                        <td width={"100px"}>Deskripsi</td>
                        <td width={"15px"}>:</td>
                        <td>{dataOneWisata.deskripsi}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWisataPage;
