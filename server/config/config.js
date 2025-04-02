module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./netview.db",
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:",
  },
  production: {
    dialect: "sqlite",
    storage: "./netview.prod.db",
  },
};
