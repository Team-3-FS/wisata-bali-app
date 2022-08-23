const { category, user, wisata, image, komenRatig } = require("../../models");
const { encryptPw } = require("../../helper/bcyrpt");

class UsersController {
  static async userPage(req, res) {
    try {
      const dataWisata = await wisata.findAll({ include: [category, image] });
      res.status(200).json(dataWisata);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detail(req, res) {
    try {
      const id = +req.params.id;
      const resWisata = await wisata.findOne({ where: { id }, include: [category, image] });
      const resKomentar = await komenRatig.findOne({ where: { wisataId: id }, include: [user] });
      resWisata ? res.status(200).json({ resWisata, resKomentar }) : res.status(404).json({ message: `Not found` });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async addKomentar(req, res) {
    try {
      const cookies = req.cookies;
      const wisataId = +req.params.id;
      const userId = cookies.user.id;
      const { rating, kometar } = req.body;
      const valUser = await komenRatig.findOne({ where: { userId, wisataId } });
      if (valUser) {
        res.status(200).json({ message: `User sudah menambahkan komentar di wisata ini!` });
      } else {
        const addKomentar = await komenRatig.create({ wisataId, userId, rating, kometar });
        const jmlRating = await komenRatig.findAll({ where: { wisataId } });
        let hasil = 0;
        jmlRating.forEach((rat) => {
          hasil += rat.rating;
        });
        const newRating = hasil / jmlRating.length;
        await wisata.update({ rating: newRating }, { where: { id: wisataId } });
        res.json(addKomentar);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getProfile(req, res) {
    try {
      const id = +req.cookies.user.id;
      let getUser = await user.findByPk(id);
      res.status(200).json(getUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updProfile(req, res) {
    try {
      const cookies = req.cookies;
      const images = req.file.path;
      const { nama, email, pass } = req.body;
      const encryptPass = encryptPw(pass);
      const valEmail = await user.findOne({ where: { email } });
      if (valEmail && valEmail.email !== cookies.user.email) {
        res.status(200).json({ msg: `Email sudah terdaftar!` });
      } else {
        const updUser = await user.update(
          { nama, email, pass: encryptPass, image: images },
          { where: { id: cookies.user.id } }
        );
        updUser[0] === 1 ? res.status(200).json("Updated!") : res.status(404).json("Not found!");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UsersController;
