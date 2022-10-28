'use strict';

const rols = [
  {
    id : 1,
    name : 'admin',
    createdAt : new Date()
  },
  {
    id : 2,
    name : 'user',
    createdAt : new Date()
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Rols', rols, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Rols', null, {});
     
  }
};
