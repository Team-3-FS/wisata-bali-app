'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class komenRatig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  komenRatig.init({
    wisataId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    kometar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'komenRatig',
  });
  return komenRatig;
};