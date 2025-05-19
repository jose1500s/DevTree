const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hola mundo en Express')
})

app.listen(4000, () => {
    console.log('Prendido en el puerto [4000]...')
})