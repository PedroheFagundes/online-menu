const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get('/ping', async (req, res) => {
	try {
		const ping = await pool.query(`
    		select distinct
    			'ping' as ping
			from
				product_pt
			`
		);
		res.json(ping.rows);
	} 
	catch (err) {
		console.error(err.message);
	}
});

router.get('/starters-pt', async (req, res) => {
	try {
		const starters = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				replace (price::text, '.', ',') as price
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

router.get('/starters-en', async (req, res) => {
	try {
		const starters = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				replace (price::text, '.', ',') as price
			from
				product_en prod
				join sub_section_en sub on
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

router.get('/main-dishes-pt', async (req, res) => {
	try {
		const mainDishes = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				replace (price::text, '.', ',') as price
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

router.get('/main-dishes-en', async (req, res) => {
	try {
		const mainDishes = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				replace (price::text, '.', ',') as price
			from
				product_en prod
				join sub_section_en sub on
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

router.get('/desserts-pt', async (req, res) => {
	try {
		const desserts = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				replace (price::text, '.', ',') as price
			from
				product_pt prod
				join sub_section_pt sub on
					prod.sub_section_key = sub.key
			where
				sub.section_id = 3
			order by
				sub_section
			`
		);
		res.json(desserts.rows);
	} 
	catch (err) {
		console.error(err.message);
	}
});

router.get('/desserts-en', async (req, res) => {
	try {
		const desserts = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				replace (price::text, '.', ',') as price
			from
				product_en prod
				join sub_section_en sub on
					prod.sub_section_key = sub.key
			where
				sub.section_id = 3
			order by
				sub_section
			`
		);
		res.json(desserts.rows);
	} 
	catch (err) {
		console.error(err.message);
	}
});

router.get('/drinks-pt', async (req, res) => {
	try {
		const drinks = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				replace (price::text, '.', ',') as price
			from
				product_pt prod
				join sub_section_pt sub on
					prod.sub_section_key = sub.key
			where
				sub.section_id = 4
			order by
				sub_section
			`
		);
		res.json(drinks.rows);
	} 
	catch (err) {
		console.error(err.message);
	}
});

router.get('/drinks-en', async (req, res) => {
	try {
		const drinks = await pool.query(`
			select
				sub.name as sub_section,
				prod.name,
				description,
				replace (price::text, '.', ',') as price
			from
				product_en prod
				join sub_section_en sub on
					prod.sub_section_key = sub.key
			where
				sub.section_id = 4
			order by
				sub_section
			`
		);
		res.json(drinks.rows);
	} 
	catch (err) {
		console.error(err.message);
	}
});

module.exports = router;