'use strict';

const {hashSync} = require('bcryptjs')

const users = [
  {
    firstname : 'admin',
    lastname: 'admin',
    email : 'admin@gmail.com',
    password : hashSync("123123",10),
    nacionality: null,
    gender : null,
    document : null,
    birthday : null,
    avatar: null,
    rolId: 1,
    createdAt : new Date()
  },
  {
    firstname : 'user',
    lastname: 'user',
    email : 'user@gmail.com',
    password : hashSync("123123",10),
    nacionality: null,
    gender : null,
    document : null,
    birthday : null,
    avatar: null,
    rolId: 2,
    createdAt : new Date()
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Users', users, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};

