const express = require("express");
const router = express.Router()

router.get('/get', (req, res) => {
  try {
    const allProducts = await pool.query(`
      SELECT
          *
      FROM
          product
    `);
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});


  module.exports = router;