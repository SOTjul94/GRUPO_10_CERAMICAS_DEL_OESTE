<<<<<<< HEAD
module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        idusers : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        firstname : {
            type: dataTypes.STRING(45),
            allowNull:false
        },
        lastname : {
            type: dataTypes.STRING(45),
            allowNull:false
        },
        email : {
            type: dataTypes.STRING(45),
            allowNull:false
        },
        avatar_id : {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        document : {
            type: dataTypes.DECIMAL,
            primaryKey: true
        },
        nacionality : {
            type: dataTypes.STRING(45),
            allowNull:false
        },
        birthday : {
            type: dataTypes.DATE,
            allowNull: false
        },
        rol_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        password : {
            type: dataTypes.STRING(255),
            allowNull:false
        }
    };
    let config = {
        timestamps : true
=======
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
>>>>>>> Abril
    }
  }
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    document: DataTypes.STRING,
    birthday: DataTypes.DATE,
    nacionality_id: DataTypes.INTEGER,
    rol_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};