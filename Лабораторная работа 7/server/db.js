const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'srKUW2001',
    host: 'localhost',
    port: 5432,
    database: 'company'
})

module.exports = pool