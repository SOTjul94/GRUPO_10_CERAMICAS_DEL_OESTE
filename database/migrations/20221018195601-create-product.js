'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      caja: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      thickness: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING,
      },
      salesFormat: {
        type: Sequelize.STRING,
      },
      finish: {
        type: Sequelize.STRING,
      },
      style: {
        type: Sequelize.STRING,
      },
      dimension: {
        type: Sequelize.STRING,
      },
      endurance: {
        type: Sequelize.STRING,
      },
      transit: {
        type: Sequelize.STRING,
      },
      origin: {
        type: Sequelize.STRING,
      },
      pei: {
        type: Sequelize.STRING,
      },
      recomendation: {
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};