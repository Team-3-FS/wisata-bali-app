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
    cb(wisataUser.data);
    console.log(wisataUser);
  } catch (error) {
    console.log(error);
  }
};

export { getWisataUser };
