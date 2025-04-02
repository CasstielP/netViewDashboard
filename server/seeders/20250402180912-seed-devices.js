'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Configs', [
      {
        key: 'frequency_band',
        value: '3.5GHz',
        description: 'Radio frequency band in use',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'power_limit',
        value: '35dBm',
        description: 'Max transmission power',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: 'signal_threshold',
        value: '65',
        description: 'Minimum required signal strength',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Configs', null, {});
  },
};
