const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.get("Accept-Language"),
    software: req.get("User-Agent")
  });
});

module.exports = router;
