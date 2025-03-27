const express = require("express");
const router = express.Router();
const Config = require("../models/Config");

// GET all config settings
router.get("/", async (req, res) => {
  const configs = await Config.findAll();
  res.json(configs);
});

// PUT update setting
router.put("/:key", async (req, res) => {
  const { key } = req.params;
  const { value } = req.body;

  const config = await Config.findOne({ where: { key } });
  if (!config) return res.status(404).json({ error: "Config not found" });

  config.value = value;
  await config.save();

  res.json(config);
});

module.exports = router;
