const { category } = require("../models");

class CategoryController {
  static async getCategory(req, res) {
    try {
      let categories = await category.findAll();

      res.json(categories);
    } catch (err) {
      res.json(err);
    }
  }
  static async getCategoryId(req, res) {
    try {
      const { id } = req.params;
      const result = await category.findOne({
        where: { id },
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async addCategory(req, res) {
    try {
      const { nama } = req.body;

      let addCategory = await category.create({
        nama,
      });

      res.json(addCategory);
    } catch (err) {
      res.json(err);
    }
  }
  static async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const result = await category.destroy({ where: { id } });
      if (result !== 0) {
        res.json({ message: `Category with id ${id} has been deleted` });
      } else {
        res.json({ message: `Category can't be deleted` });
      }
    } catch (err) {
      res.json(err);
    }
  }
  static async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const { nama } = req.body;

      const result = await category.update(
        {
          nama: nama,
        },
        {
          where: { id },
        }
      );

      if (result[0] !== 0) {
        res.json({ message: `Category with id ${id} has been updated` });
      } else {
        res.json({
          message: `Category can't be updated`,
        });
      }
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CategoryController;
