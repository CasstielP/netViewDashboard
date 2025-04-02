const express = require("express");
const router = express.Router();
const { Config } = require("../models");

// GET /api/config
router.get("/", async (req, res) => {
  try {
    const configs = await Config.findAll();
    res.json(configs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch configs" });
  }
});

// PUT /api/config/:key
router.put("/:key", async (req, res) => {
  try {
    const config = await Config.findOne({ where: { key: req.params.key } });
    if (!config) return res.status(404).json({ error: "Config not found" });

    config.value = req.body.value;
    await config.save();

    res.json(config);
  } catch (err) {
    res.status(500).json({ error: "Failed to update config" });
  }
});

module.exports = router;
