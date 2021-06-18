const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const API_VERSION = '/v1'

//connects to mongoDb
require('./db/db')


const app = express()


app.disable("x-powered-by");

app.use(helmet())
app.use(cors())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//call base end point
app.get('/', (req, res) => {
    res.status(200).send({
        'health-check': 'Ok',
        'message': 'base endpoint for items api is up and running'
    })
})

module.exports = app