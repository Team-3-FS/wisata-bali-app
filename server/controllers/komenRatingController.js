const {komenRatig, user, wisata} = require('../models')

class komenRatingController {
  static async getKomenRating(req, res) {
    try {
      let result = await komenRatig.findAll({
        include: [user, wisata]
      })
      res.json(result)
    } catch (err) {
      res.json(err);
    }
  }
  static async getKomenRatingId(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
  static async addKomenRating(req, res) {
    try {
      const {wisataId, userId, rating, kometar} = req.body
      let addKomen = await komenRatig.create({
        wisataId: wisataId,
        userId: userId,
        rating: rating,
        kometar: kometar
      })
      res.json(addKomen)
    } catch (err) {
      res.json(err);
    }
  }
  static async deleteKomenRating(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
  static async updateKomenRating(req, res) {
    try {
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = komenRatingController;
