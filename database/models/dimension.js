'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dimension extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dimension.init({
    height: DataTypes.DECIMAL,
    width: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Dimension',
  });
  return Dimension;
};