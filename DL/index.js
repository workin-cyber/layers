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

const getUser = async (id) => {
    const res = await client.query(`
    SELECT * FROM public.users 
    WHERE id = '${id}'
    `)
    return res.rows[0]
}

const getUserByEmail = async (email) => {
    const res = await client.query(`
    SELECT * FROM public.users 
    WHERE email = '${email}'
    `)
    return res.rows[0]
}

const createUser = async (data) => {
    await client.query(`
        INSERT INTO public.users(id, name, email, password)
        VALUES('${data.id}', '${data.name}', '${data.email}', '${data.password}')
    `)
    delete data.password
    return data
}

module.exports = { getUsers, getUser, createUser, getUserByEmail }