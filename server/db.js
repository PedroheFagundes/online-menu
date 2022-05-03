const Pool = require("pg").Pool;

const pool = new Pool({
  user: "ckerdtpvwjhlyr",
  password: "63b8338ab86e65f2e77d1c1a42fe8c5ea17ac7cd4be490ebadbd5d2eb5ef7fb7",
  host: "ec2-99-81-137-11.eu-west-1.compute.amazonaws.com",
  port: 5432,
  database: "d422iujtp0hj3h",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;