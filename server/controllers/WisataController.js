const { wisata } = require("../models");

class WisataController {
  static async getWisata(req, res) {
    try {
      let result = await wisata.findAll({});

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async getWisataId(req, res) {
    try {
      const { id } = req.params;
      const result = await wisata.findOne({
        where: { id },
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async addWisata(req, res) {
    try {
      const { nama, alamat, deskripsi, rating, categoryId } = req.body;

      let addWisata = await wisata.create({
        nama: nama,
        alamat: alamat,
        deskripsi: deskripsi,
        rating: rating,
        categoryId: categoryId,
      });

      res.json(addWisata);
    } catch (err) {
      res.json(err);
    }
  }
  static async deleteWisata(req, res) {
    try {
      const { id } = req.params;
      const result = await wisata.destroy({ where: { id } });
      if (result !== 0) {
        res.json({ message: `Wisata with id ${id} has been deleted` });
      } else {
        res.json({ message: `Wisata can't be deleted` });
      }
    } catch (err) {
      res.json(err);
    }
  }
  static async updateWisata(req, res) {
    try {
      const { id } = req.params;
      const { nama, alamat, deskripsi, rating, categoryId } = req.body;

      const result = await wisata.update(
        {
          nama: nama,
          alamat: alamat,
          deskripsi: deskripsi,
          rating: rating,
          categoryId: categoryId,
        },
        {
          where: { id },
        }
      );

      if (result[0] !== 0) {
        res.json({ message: `Wisata with id ${id} has been updated` });
      } else {
        res.json({
          message: `Wisata can't be updated`,
        });
      }
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = WisataController;
