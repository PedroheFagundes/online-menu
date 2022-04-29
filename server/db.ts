const Pool = require("pg").Pool;

const pool = new Pool({
  user: "pfowoqratmnnlf",
  password: "4802092ff8443fe3cbcd8a2eb2da93cf8c32e9a3b6601774fe899f135b796b04",
  host: "ec2-99-80-170-190.eu-west-1.compute.amazonaws.com",
  port: 5432,
  database: "diggb9q7j8qqj",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;