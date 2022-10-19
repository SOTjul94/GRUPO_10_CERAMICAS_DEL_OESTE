'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Product.init({
    model: DataTypes.STRING,
    price: DataTypes.INTEGER,
    pieces: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    thickness: DataTypes.INTEGER,
    image: DataTypes.STRING,
    color_id: DataTypes.INTEGER,
    salesFormat_id: DataTypes.INTEGER,
    factorie_id: DataTypes.INTEGER,
    style_id: DataTypes.INTEGER,
    dimension_id: DataTypes.INTEGER,
    endurance_id: DataTypes.INTEGER,
    transit_id: DataTypes.INTEGER,
    origin_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};