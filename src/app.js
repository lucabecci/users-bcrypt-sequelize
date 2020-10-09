const express = require('express')
const morgan = require('morgan')
//initializations
const app = express();
//importing routes

//middlewares
app.use(morgan('dev'))
app.use(express.json())
//routes

module.exports = app;