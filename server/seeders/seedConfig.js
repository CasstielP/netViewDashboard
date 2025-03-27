const Config = require("../models/Config");

const seedConfig = async () => {
  await Config.destroy({ where: {} });

  await Config.bulkCreate([
    { key: "frequency_band", value: "3.5GHz", description: "Radio frequency band in use" },
    { key: "power_limit", value: "35dBm", description: "Max transmission power" },
    { key: "signal_threshold", value: "65", description: "Minimum required signal strength" },
  ]);
};

module.exports = seedConfig;
