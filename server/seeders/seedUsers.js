const bcrypt = require("bcrypt");
const User = require("../models/User");

const seedUsers = async () => {
  await User.destroy({ where: {} });

  const adminPassword = await bcrypt.hash("admin123", 10);
  const operatorPassword = await bcrypt.hash("operator123", 10);

  await User.bulkCreate([
    { username: "admin", passwordHash: adminPassword, role: "admin" },
    { username: "operator", passwordHash: operatorPassword, role: "operator" },
  ]);
};

module.exports = seedUsers;
