require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const helpers = require('./helpers')

const app = express()

app.use(cors())

app.get('/recipients', (req, res) => {
	const url = helpers.mountURL('/recipients')
  axios.get(url)
  	.then((response) => {
  		res.status(response.status).send(response.data)
  	})
  	.catch((error) => {
  		res.status(error.response.status).send(error.response.data)
  	})
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
