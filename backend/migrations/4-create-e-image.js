'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('e_images', {
        id: {
          type:           Sequelize.INTEGER,
          primaryKey:     true,
          autoIncrement:  true
      },
      name: {
          type:       Sequelize.STRING(30),
          allowNull:  false,
          unique:     true
      },
      image:  Sequelize.BLOB,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('e_images');
  }
};