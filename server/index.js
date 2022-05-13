const express = require("express");
const cors = require("cors");
const products = require('./routes/products')
const router = express.Router();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/ping', async (req, res) => {
	try {
		const ping = await pool.query(`
    		select distinct
    			'ping'
			from
				product_pt prod
			`
		);
		res.json(ping.rows);
	} 
	catch (err) {
		console.error(err.message);
	}
});

app.use('/products', products);

//Estabilishing the port
const PORT = process.env.PORT || 5000;

// Create a server running on chosen PORT
app.listen(PORT, () => {
  console.log(`server has start on PORT ${PORT}`);
});
