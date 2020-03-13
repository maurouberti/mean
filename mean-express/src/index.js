const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

mongoose.connect('mongodb://mongo:27017/mean', { useNewUrlParser: true, useUnifiedTopology: true })

require('./api/routes')(app)

app.listen(3000, () => {
    console.log('Servidor redando na porta 3000')
})