import express from 'express'  //ESM Ecmascript Modules
//const express = require('express') CSJ Common JS

const app = express()

app.get('/', (req, res) => {
    res.send('Hola mundo en Express')
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('servidor en el puerto:', port)
})