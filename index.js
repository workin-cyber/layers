require('dotenv').config()
const
    bodyParser = require('body-parser'),
    express = require('express'),
    router = require('./router'),
    app = express(),
    port = process.env.PORT

console.log(process.env)

/* app.use(require('cors')()) */
app.use(bodyParser.json())

app.use(express.static('build'))

router(app)

app.listen(port, () => console.log(`Server running: ${port}`))

//research
//development
//qa/test
//staging
//production