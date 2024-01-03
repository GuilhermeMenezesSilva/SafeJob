const express = require('express')
const app = express()
const db = require('./db/connection')

const PORT = 3000

app.listen(PORT, function(){
    console.log(`O express está ouvindo na porta ${PORT}`)
})

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