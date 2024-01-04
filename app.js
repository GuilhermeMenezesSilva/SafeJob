const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, function () {
    console.log(`O express está ouvindo na porta ${PORT}`)
})

// body parser
app.use(bodyParser.urlencoded({ extended: false }))

// handle bars
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// db connection
db
    .authenticate()
    .then(() => {
        console.log("Conectado com sucesso")
    })
    .catch(err => {
        console.log("Ocorreu o erro ao conectar", err)
    })

// routes
app.get('/', (req, res) => {
    res.send("Está funcionando")
})

// jobs route
app.use('/jobs', require('./routes/jobs'))