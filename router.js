const BL = require('./BL')

function Router(app) {

    app.get('/', (req, res) => {
        res.send(`<h1>Hello world</h1>`)
    })

    app.get('/users', async (req, res) => {
        try {
            const result = await BL.getUsers()// BL.users.read()
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

}

module.exports = Router