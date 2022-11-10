'use strict';

const imagesDB =  require('../../data/imagesDB.json')

const images = imagesDB.map(({file,id}) => {
  return{
    file,
    productId : id,
    createdAt : new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Images', images, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Images', null, {});
     
  }
};


