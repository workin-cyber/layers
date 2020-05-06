const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    password: '1111',
    database: 'postgres',
    port: 5432
})

client.connect()

const getUsers = async () => {
    const res = await client.query(`SELECT * FROM public.users ORDER BY id`)
    return res.rows
}


module.exports = { getUsers }