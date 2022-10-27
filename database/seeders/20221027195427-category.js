'use strict';

const category = [
  {
    name : 'interior',
    createdAt : new Date()
  },
  {
    name : 'exterior',
    createdAt : new Date()
  },
  {
    name : 'baños',
    createdAt : new Date()
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Category', category, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Category', null, {});
     
  }
};
