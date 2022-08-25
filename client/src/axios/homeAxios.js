import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3000/home";

const getWisata = async (cb) => {
  try {
    let wisata = await axios({
      method: "GET",
      url: URL,
    });
    cb(wisata.data);
    // console.log(wisata.data)
  } catch (error) {
    console.log(error);
  }
};

const getCategoryId = async (id, cb) => {
  // console.log(id);

  try {
    let result = await axios({
      method: "GET",
      url: URL + "/category/" + id,
    });
    console.log(result.data);
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

const getWisataId = async (id, cb) => {
  // console.log(id);

  try {
    let result = await axios({
      method: "GET",
      url: URL + "/" + id,
    });
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (form, cb) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/login",
      data: form,
    });
    Swal.fire("Login", "Login Success", "success");
    console.log(result);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: `Error Status ${error.response.status}`,
      text: `Email and Password didn't match`,
    });
    console.log(error);
  }
};

const regisUser = async (form, cb) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/register",
      data: form,
    });
    Swal.fire("Register", "Register Success", "success");
    console.log(result);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `Something Wrong when register`,
    });
    console.log(error);
  }
};

export { getWisata, getCategoryId, getWisataId, loginUser, regisUser };
