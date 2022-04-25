const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Middleware
app.use(cors())
app.use(bodyParser.json())

const weaponsRoute = require('./routes/weapons')

app.use('/weapons', weaponsRoute)

mongoose.connect( 
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true },
  () => console.log('connected to DB!')
)

app.listen(3000)