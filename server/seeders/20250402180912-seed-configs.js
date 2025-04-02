'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Devices', [
      {
        name: 'Tower-Alpha',
        ip: '10.0.1.1',
        status: 'Online',
        uptime: '4d 6h',
        signalStrength: 82,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Node-Bravo',
        ip: '10.0.2.3',
        status: 'Warning',
        uptime: '2d 19h',
        signalStrength: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Site-Charlie',
        ip: '10.0.3.9',
        status: 'Offline',
        uptime: '0h',
        signalStrength: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Devices', null, {});
  },
};
