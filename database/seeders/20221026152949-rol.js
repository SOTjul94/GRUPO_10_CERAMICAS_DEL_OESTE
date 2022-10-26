'use strict';

const rol = [
  {
    name : 'admin',
    createdAt : new Date()
  },
  {
    name : 'user',
    createdAt : new Date()
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Rol', rol, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Rol', null, {});
     
  }
};
