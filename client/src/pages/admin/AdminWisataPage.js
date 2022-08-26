import React from "react";

const AdminWisataPage = () => {
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
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <a data-bs-toggle="modal" data-bs-target="#detail">
                      Pantai Sadewa
                    </a>
                  </td>
                  <td>Mark</td>
                  <td>Mark</td>
                  <td>Mark</td>
                  <td>
                    <a className="btn btn-sm btn-dark mx-1 " data-bs-toggle="modal" data-bs-target="#edit">
                      Edit
                    </a>
                    <a className="btn btn-sm btn-dark">Delete</a>
                  </td>
                </tr>
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
                Tambah Data Kategori
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              <form>
                {/* batas isi */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama Kategori
                  </label>
                  <input type="text" required className="form-control" id="name" placeholder="Masukkan nama kategori..." />
                </div>
                {/* batas isi */}
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
                Ubah Data Kategori
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama Kategori
                  </label>
                  <input type="text" required className="form-control" id="name" placeholder="Masukkan nama..." />
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
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama Kategori
                  </label>
                  <input type="text" required className="form-control" id="name" placeholder="Masukkan nama..." />
                </div>
                <div className="mb-3 py-2">
                  <button type="button" className="btn btn-sm btn-dark mx-1" data-bs-dismiss="modal">
                    Close
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

export default AdminWisataPage;
