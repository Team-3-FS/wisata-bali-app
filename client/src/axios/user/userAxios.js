import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDebugValue } from "react";
import Cookies from "js-cookie";

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

const getUserWisataId = async (wisataId, cb) => {
  // console.log(id);
  let checkCookie = Cookies.get("user");
  checkCookie = JSON.parse(checkCookie);
  // console.log(checkCookie);
  const { id } = checkCookie;
  // console.log(id);

  try {
    // formId = { userId: 6 };
    let result = await axios({
      method: "POST",
      url: URL + "/wisata/" + wisataId,
      data: { userId: id },
    });

    // console.log(result.data);
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

export { getWisataUser, getUserWisataId };
