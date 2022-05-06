const express = require("express");
const router = express.Router()
const pool = require("../db");

router.get('/starters', async (req, res) => {
	try {
		const starters = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				price
			from
				product_pt prod
				join sub_section_pt sub on
					prod.sub_section_key = sub.key
			where
				sub.section_id = 1
			order by
				sub_section
			`
		);
		res.json(starters.rows);
	} 
	catch (err) {
		console.error(err.message);
	}
});

router.get('/main-dishes', async (req, res) => {
	try {
		const mainDishes = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				price
			from
				product_pt prod
				join sub_section_pt sub on
					prod.sub_section_key = sub.key
			where
				sub.section_id = 2
			order by
				sub_section
			`
		);
		res.json(mainDishes.rows);
	} 
	catch (err) {
		console.error(err.message);
	}
});

module.exports = router;