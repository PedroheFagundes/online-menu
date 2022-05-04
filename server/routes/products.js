const express = require("express");
const router = express.Router()
const pool = require("../db");

router.get('/get', async (req, res) => {
	try {
		const allProducts = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				price
			from
				product prod
				join sub_section sub on
				prod.sub_section_key = sub.key
			order by sub_section
			`
		);
		res.json(allProducts.rows);
	} 
	catch (err) {
		console.error(err.message);
	}
});

module.exports = router;