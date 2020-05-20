const BL = require('./BL')

function Router(app) {

    /*     app.get('/', (req, res) => {
            res.send(`<h1>Hello world</h1>`)
        }) */

    app.get('/users/:email', async (req, res) => {
        try {
            const
                { headers, params } = req,
                result = await BL.users.read({ email: params.email, token: headers.authorization })
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/user/:id', async (req, res) => {
        try {
            const { id } = req.params
            const result = await BL.users.readOne(id)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.post('/user', async (req, res) => {
        try {
            const result = await BL.users.register(req.body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.post('/user/login', async (req, res) => {
        try {
            const result = await BL.users.login(req.body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

}

module.exports = Router