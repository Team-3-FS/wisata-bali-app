import React from "react";

const AdminKomenPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mx-auto border my-1 py-3 rounded">
          <h4 className="text-center">Data Komentar</h4>
          <div className="table-responsive text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Wisata</th>
                  <th scope="col">Pengguna</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Komentar</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Mark</td>
                  <td>Mark</td>
                  <td>Mark</td>
                  <td>Mark</td>
                  <td>
                    <a className="btn btn-sm btn-dark">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminKomenPage;
