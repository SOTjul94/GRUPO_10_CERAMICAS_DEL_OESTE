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
      this.hasMany(models.Image, {
        as: "images",
        foreignKey: "productId",
        onDelete: "CASCADE",
      });
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.STRING,
    caja: DataTypes.STRING,
    discount: DataTypes.STRING,
    description: DataTypes.STRING,
    thickness: DataTypes.STRING,
    image: DataTypes.STRING,
    color: DataTypes.STRING,
    salesFormat: DataTypes.STRING,
    finish: DataTypes.STRING,
    style: DataTypes.STRING,
    dimension: DataTypes.STRING,
    endurance: DataTypes.STRING,
    transit: DataTypes.STRING,
    origin: DataTypes.STRING,
    pei: DataTypes.STRING,
    recomendation: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};