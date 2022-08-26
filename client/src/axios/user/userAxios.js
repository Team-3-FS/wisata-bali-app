import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3000/user";

const getWisataUser = async (cb) => {
  try {
    let wisataUser = await axios({
      method: "GET",
      url: URL,
    });
    cb(wisataUser.data.dataWisata);
    // console.log(wisataUser);
  } catch (error) {
    console.log(error);
  }
};

const getUserWisataId = async (id, cb) => {
  // console.log(id);

  try {
    let result = await axios({
      method: "GET",
      url: URL + "/wisata/" + id,
    });
    console.log(result.data);
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

export { getWisataUser, getUserWisataId };
