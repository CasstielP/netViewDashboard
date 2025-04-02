'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const adminHash = await bcrypt.hash('admin123', 10);
    const operatorHash = await bcrypt.hash('operator123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        passwordHash: adminHash,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'operator',
        passwordHash: operatorHash,
        role: 'operator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
