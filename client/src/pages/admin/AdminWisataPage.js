import { getWisatas, getWisataById, addWisata, delWisata, updWisata } from "../../axios/admin/adminWisataAxios";
import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

const AdminWisataPage = () => {
  const [dataWisata, setDataWisata] = useState([]);
  useEffect(() => {
    getWisatas((res) => setDataWisata(res));
  }, []);
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
                        <a data-bs-toggle="modal" data-bs-target="#detail">
                          {nama}
                        </a>
                      </td>
                      <td>{alamat}</td>
                      <td>{rating}</td>
                      <td>{wis.category.nama}</td>
                      <td>
                        <a className="btn btn-sm btn-dark mx-1 " data-bs-toggle="modal" data-bs-target="#edit">
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
                      <option selected>Pilih kategori...</option>
                      <option value="pantai">Pantai</option>
                      <option value="danau">Danau</option>
                      <option value="dll">dll</option>
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
                  <button type="submit" className="btn btn-sm btn-dark">
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
                      <option selected>Pilih kategori...</option>
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
                    <img
                      onDoubleClick={() => alert("delete image!")}
                      src="http://localhost:3000/assets/default.jpeg"
                      className="rounded detail-foto"
                      alt="..."
                    />
                  </div>
                  <div className="d-flex justify-content-center my-3">
                    <Rating initialValue={5} readonly size="40px" />
                  </div>
                </div>
                <div className="col-7">
                  <table>
                    <tbody>
                      <tr>
                        <td width={"100px"}>Nama Wisata</td>
                        <td width={"15px"}>:</td>
                        <td>Pantai Sanur</td>
                      </tr>
                      <tr>
                        <td width={"100px"}>Kategori</td>
                        <td width={"15px"}>:</td>
                        <td>Pantai</td>
                      </tr>
                      <tr>
                        <td width={"100px"}>Alamat</td>
                        <td width={"15px"}>:</td>
                        <td>Jalan Raya Boyolali - Magelang Km 06, Jelok, Cepogo, Boyolali</td>
                      </tr>
                      <tr>
                        <td width={"100px"}>Deskripsi</td>
                        <td width={"15px"}>:</td>
                        <td>
                          Jalan Raya Boyolali - Magelang Km 06, Jelok, Cepogo, Boyolali localhostla lsdf jals lkas dfasfaksjd
                          sfhJalan Raya Boyolali - Magelang Km 06, Jelok, Cepogo, Boyolali localhostla lsdf jals lkas
                          dfasfaksjd sfhJalan Raya Boyolali - Magelang Km 06, Jelok, Cepogo, Boyolali localhostla lsdf jals
                          lkas dfasfaksjd sfhJalan Raya Boyolali - Magelang Km 06, Jelok, Cepogo, Boyolali localhostla lsdf
                          jals lkas dfasfaksjd sfhJalan Raya Boyolali - Magelang Km 06, Jelok, Cepogo, Boyolali localhostla
                          lsdf jals lkas dfasfaksjd sfhJalan Raya Boyolali - Magelang Km 06, Jelok, Cepogo, Boyolali
                          localhostla lsdf jals lkas dfasfaksjd sfhJalan Raya Boyolali - Magelang Km 06, Jelok, Cepogo,
                          Boyolali localhostla lsdf jals lkas dfasfaksjd sfhJalan Raya Boyolali - Magelang Km 06, Jelok,
                          Cepogo, Boyolali localhostla lsdf jals lkas dfasfaksjd sfhJalan Raya Boyolali - Magelang Km 06,
                          Jelok, Cepogo, Boyolali localhostla lsdf jals lkas dfasfaksjd sfhJalan Raya Boyolali - Magelang Km
                          06,fh
                        </td>
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
