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
      model: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      pieces: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      thickness: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      color_id: {
        type: Sequelize.INTEGER
      },
      salesFormat_id: {
        type: Sequelize.INTEGER
      },
      factorie_id: {
        type: Sequelize.INTEGER
      },
      style_id: {
        type: Sequelize.INTEGER
      },
      dimension_id: {
        type: Sequelize.INTEGER
      },
      endurance_id: {
        type: Sequelize.INTEGER
      },
      transit_id: {
        type: Sequelize.INTEGER
      },
      origin_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};