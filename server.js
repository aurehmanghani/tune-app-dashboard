const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/')
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/tune-app', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express()
const port = 3001
app.use(cors())
app.use('/', routes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})