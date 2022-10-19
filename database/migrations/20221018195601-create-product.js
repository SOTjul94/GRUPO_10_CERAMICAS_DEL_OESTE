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
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Colors'
          },
          key : 'id'
        }
      },
      salesFormat_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'SalesFormats'
          },
          key : 'id'
        }
      },
      factorie_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Factories'
          },
          key : 'id'
        }
      },
      style_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Styles'
          },
          key : 'id'
        }
      },
      dimension_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Dimensions'
          },
          key : 'id'
        }
      },
      endurance_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Endurances'
          },
          key : 'id'
        }
      },
      transit_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Transits'
          },
          key : 'id'
        }
      },
      origin_id: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Origins'
          },
          key : 'id'
        }
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