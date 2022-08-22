const { user, category, wisata } = require("../../models");
const { decryptPw } = require("../../helper/bcyrpt");

class HomeController {
  static async homePage(req, res) {
    res.json({ message: `Home Page` });
  }

  static async getCategoryById(req, res) {}

  static async login(req, res) {
    try {
      const { email, pass } = req.body;
      const valUser = await user.findOne({ where: { email } });
      if (valUser) {
        const valPw = decryptPw(pass, valUser.pass);
        if (valPw) {
          switch (valUser.level) {
            case "admin":
              res.cookie("user", valUser);
              res.status(200).json({ msg: `admin!` });
              break;
            case "user":
              res.cookie("user", valUser);
              res.status(200).json({ msg: `user!` });
              break;
            default:
              res.status(400).json({ msg: `Akun bermasalah!` });
              break;
          }
        } else {
          res.status(403).json({ msg: `Password salah!` });
        }
      } else {
        res.status(404).json({ msg: "Email tidak terdaftar!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async register(req, res) {
    try {
      const { nama, email, pass } = req.body;
      const valUser = await user.findOne({ where: { email } });
      if (valUser) {
        res.status(200).json({ msg: `Email sudah terdaftar!` });
      } else {
        const addUser = await user.create({ nama, email, pass });
        res.status(201).json(addUser);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = HomeController;
