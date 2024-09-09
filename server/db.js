const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: "5433",
    database: "cafeteria-food-ordering-system",
    password: "11037180"
})

module.exports = pool;