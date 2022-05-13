const express = require("express");
const cors = require("cors");
// const pool = require("./db");
const products = require('./routes/products')


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/', router.get('/', async (req, res) => {
	try {
		const starters = await pool.query(`
			select
        1 as ping
			from
				product_pt prod
			`
		);
		res.json(starters.rows);
	} 
	catch (err) {
		console.error(err.message);
	}
}))

app.use('/products', products);

//Estabilishing the port
const PORT = process.env.PORT || 5000;

// Create a server running on chosen PORT
app.listen(PORT, () => {
  console.log(`server has start on PORT ${PORT}`);
});
