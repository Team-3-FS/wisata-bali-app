const { image, wisata } = require("../../models");
class ImageController {
  static async getImage(req, res) {
    try {
      let result = await image.findAll({ include: [wisata] });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getImageId(req, res) {
    try {
      const { id } = req.params;
      const result = await image.findOne({ where: { id } });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addImage(req, res) {
    try {
      const { wisataId } = req.body;
      const images = req.file.path;
      // console.log(images);
      let addImage = await image.create({ wisataId, image: images });
      res.status(201).json(addImage);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async deleteImage(req, res) {
    try {
      const { id } = req.params;
      const result = await image.destroy({ where: { id } });
      if (result !== 0) {
        res
          .status(200)
          .json({ message: `Image with id ${id} has been deleted` });
      } else {
        res.status(404).json({ message: `Image can't be deleted` });
      }
    } catch (err) {
      res.status(500).json(err);
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
      res.status(500).json(err);
    }
  }
}

module.exports = ImageController;
