import axios from "axios";
import Swal from "sweetalert2";

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
  console.log(id);

  try {
    let result = await axios({
      method: "GET",
      url: URL + "/category/" + id,
    });
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

export { getWisata, getCategoryId };
