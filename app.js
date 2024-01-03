const express = require('express')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, function () {
    console.log(`O express está ouvindo na porta ${PORT}`)
})

// body parser
app.use(bodyParser.urlencoded({ extended: false }))

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