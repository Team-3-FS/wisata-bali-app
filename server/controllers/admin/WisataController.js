const { wisata } = require("../../models");

class WisataController {
  static async getWisata(req, res) {
    try {
      let result = await wisata.findAll({});
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getWisataId(req, res) {
    try {
      const { id } = req.params;
      const result = await wisata.findOne({ where: { id } });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addWisata(req, res) {
    try {
      const { nama, alamat, deskripsi, categoryId } = req.body;
      let addWisata = await wisata.create({
        nama,
        alamat,
        deskripsi,
        categoryId,
      });
      res.status(201).json(addWisata);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async deleteWisata(req, res) {
    try {
      const { id } = req.params;
      const result = await wisata.destroy({ where: { id } });
      if (result !== 0) {
        res
          .status(200)
          .json({ message: `Wisata with id ${id} has been deleted` });
      } else {
        res.status(404).json({ message: `Wisata can't be deleted` });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async updateWisata(req, res) {
    try {
      const { id } = req.params;
      const { nama, alamat, deskripsi, categoryId } = req.body;
      const result = await wisata.update(
        { nama, alamat, deskripsi, categoryId },
        { where: { id } }
      );
      if (result[0] !== 0) {
        res
          .status(200)
          .json({ message: `Wisata with id ${id} has been updated` });
      } else {
        res.status(404).json({ message: `Wisata can't be updated` });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = WisataController;
