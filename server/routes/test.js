const express = require("express");
const router = express.Router()

router.get('/api', (req, res) => {
    res.send("Hello from server!");
  });

  module.exports = router;