import React from "react";

const AdminUserPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto border my-1 py-3 rounded">
          <h4 className="text-center">Data Pengguna</h4>
          <a className="btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#add">
            Tambah Pengguna
          </a>
          <div className="table-responsive text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Level</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title w-100" id="addLabel">
                Tambah Data Pengguna
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama
                  </label>
                  <input type="text" required className="form-control" id="name" placeholder="Masukkan nama..." />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Email
                  </label>
                  <input type="text" required className="form-control" id="name" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">
                    Kata Sandi
                  </label>
                  <input type="password" required className="form-control" id="pass" placeholder="Masukkan kata sandi" />
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title w-100" id="editLabel">
                Ubah Data Pengguna
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama
                  </label>
                  <input type="text" required className="form-control" id="name" placeholder="Masukkan nama..." />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Email
                  </label>
                  <input type="text" required className="form-control" id="name" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">
                    Level
                  </label>
                  <select className="form-select" required aria-label="Default select example">
                    <option selected>Pilih level...</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
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
    </div>
  );
};

export default AdminUserPage;
