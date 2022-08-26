const { category, user, wisata, image, komenRatig } = require("../../models");
const { encryptPw } = require("../../helper/bcyrpt");

class UsersController {
  static async userPage(req, res) {
    try {
      // const cookies = req.cookies;
      const dataWisata = await wisata.findAll({ include: [category, image] });
      // let resUser = await user.findByPk(+cookies.user.id);
      res.status(200).json({ dataWisata});
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detail(req, res) {
    try {
      const cookies = req.cookies;
      const wisataId = +req.params.id;
      const userId = cookies.user.id;
      const resWisata = await wisata.findOne({ where: { id: wisataId }, include: [category, image] });
      const resAllKomentar = await komenRatig.findAll({ where: { wisataId }, include: [user] });
      const resUserKomentar = await komenRatig.findOne({ where: { userId, wisataId } });
      let resUser = await user.findByPk(+cookies.user.id);
      resWisata
        ? res.status(200).json({ resWisata, resAllKomentar, resUserKomentar, resUser })
        : res.status(404).json({ message: `Not found`, resUser });
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
        let resUser = await user.findByPk(+cookies.user.id);
        res.status(200).json({ message: `User sudah menambahkan komentar di wisata ini!`, resUser });
      } else {
        const addKomentar = await komenRatig.create({ wisataId, userId, rating, kometar });
        const jmlRating = await komenRatig.findAll({ where: { wisataId } });
        let hasil = 0;
        jmlRating.forEach((rat) => {
          hasil += rat.rating;
        });
        const newRating = hasil / jmlRating.length;
        let resUser = await user.findByPk(+cookies.user.id);
        await wisata.update({ rating: newRating }, { where: { id: wisataId } });
        res.json({ addKomentar, resUser });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateKomentar(req, res) {
    try {
      const cookies = req.cookies;
      const wisataId = +req.params.id;
      const userId = cookies.user.id;
      const { rating, kometar } = req.body;
      const updKomentar = await komenRatig.update({ rating, kometar }, { where: { wisataId, userId } });
      if (updKomentar[0] !== 0) {
        const jmlRating = await komenRatig.findAll({ where: { wisataId } });
        let hasil = 0;
        jmlRating.forEach((rat) => {
          hasil += rat.rating;
        });
        const newRating = hasil / jmlRating.length;
        await wisata.update({ rating: newRating }, { where: { id: wisataId } });
        let resUser = await user.findByPk(+cookies.user.id);
        res.status(201).json({ message: `Updated!`, resUser });
      } else {
        let resUser = await user.findByPk(+cookies.user.id);
        res.status(404).json({ message: `Not found!`, resUser });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteKomentar(req, res) {
    try {
      const cookies = req.cookies;
      const wisataId = +req.params.id;
      const userId = cookies.user.id;
      const delKomentar = await komenRatig.destroy({ where: { userId, wisataId } });
      const jmlRating = await komenRatig.findAll({ where: { wisataId } });
      let hasil = 0;
      jmlRating.forEach((rat) => {
        hasil += rat.rating;
      });
      const newRating = hasil / jmlRating.length;
      await wisata.update({ rating: newRating }, { where: { id: wisataId } });
      let resUser = await user.findByPk(+cookies.user.id);
      delKomentar === 1
        ? res.status(200).json({ msg: "Deleted!", resUser })
        : res.status(404).json({ msg: "Not found!", resUser });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getProfile(req, res) {
    try {
      const id = +req.cookies.user.id;
      const cookies = req.cookies;
      let resUser = await user.findByPk(id);
      res.status(200).json({ resUser });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updProfile(req, res) {
    try {
      const id = +req.cookies.user.id;
      const cookies = req.cookies;
      const images = req.file.path;
      const { nama, email, pass } = req.body;
      const encryptPass = encryptPw(pass);
      const valEmail = await user.findOne({ where: { email } });
      if (valEmail && valEmail.email !== cookies.user.email) {
        const resUser = await user.findByPk(id);
        res.status(200).json({ msg: `Email sudah terdaftar!`, resUser });
      } else {
        const updUser = await user.update(
          { nama, email, pass: encryptPass, image: images },
          { where: { id: cookies.user.id } }
        );
        const resUser = await user.findByPk(id);
        updUser[0] === 1
          ? res.status(200).json({ msg: "Updated!", resUser })
          : res.status(404).json({ msg: "Not found!", resUser });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UsersController;
