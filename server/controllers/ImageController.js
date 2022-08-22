const { image, wisata } = require("../models");
class ImageController {
  static async getImage(req, res) {
    try {
      let result = await image.findAll({ include: [wisata] });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async getImageId(req, res) {
    try {
      const { id } = req.params;
      const result = await image.findOne({
        where: { id },
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async addImage(req, res) {
    try {
      const { wisataId, images } = req.body;

      let addImage = await image.create({
        wisataId: wisataId,
        image: images,
      });
      res.json(addImage);
    } catch (err) {
      res.json(err);
    }
  }
  static async deleteImage(req, res) {
    try {
      const { id } = req.params;
      const result = await image.destroy({ where: { id } });
      if (result !== 0) {
        res.json({ message: `Image with id ${id} has been deleted` });
      } else {
        res.json({ message: `Image can't be deleted` });
      }
    } catch (err) {
      res.json(err);
    }
  }
  static async updateImage(req, res) {
    try {
      // const { id } = req.params;
      // const { nama } = req.body;
      // const result = await image.update(
      //   {
      //     nama: nama,
      //   },
      //   {
      //     where: { id },
      //   }
      // );
      // if (result[0] !== 0) {
      //   res.json({ message: `Image with id ${id} has been updated` });
      // } else {
      //   res.json({
      //     message: `Image can't be updated`,
      //   });
      // }
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = ImageController;
