'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Mateus Gambaro',
        email: 'mateusgambaro@gmail.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        fullName: 'Lucas',
        email: 'lucas@dguests.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
