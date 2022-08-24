const { komenRatig, wisata, user } = require("../../models");

class komenRatingController {
  static async getKomenRating(req, res) {
    try {
      const komens = await komenRatig.findAll({});
      res.status(200).json(komens);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getKomenRatingId(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addKomenRating(req, res) {
    try {
      const { wisataId, userId, rating, kometar } = req.body;
      let addKomen = await komenRatig.create({
        wisataId: wisataId,
        userId: userId,
        rating: rating,
        kometar: kometar,
      });
      res.json(addKomen);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async deleteKomenRating(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async updateKomenRating(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = komenRatingController;