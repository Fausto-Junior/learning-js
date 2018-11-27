require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const recipientController = require('./controller/recipient')
const authController = require('./controller/auth')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/login', authController.login)

app.get('/recipients', recipientController.getRecipients)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
