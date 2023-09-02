// app configuration 

const express = require('express');
const router = require('./src/Routes/api')
const app = express();



app.use(express.json());
app.use('/api' , router);

module.exports = app ;