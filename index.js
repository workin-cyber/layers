const
    bodyParser = require('body-parser'),
    express = require('express'),
    router = require('./router'),
    app = express(),
    port = 55555

app.use(require('cors')())
app.use(bodyParser.json())

router(app)

app.listen(port, () => console.log(`Server running: ${port}`))
