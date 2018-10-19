require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/recipients', function (req, res) {
  axios.get ('https://api.pagar.me/1/recipients?api_key=' + process.env.API_KEY)
	.then (function (response){
		res.status(response.status).send(response.data)
	})
	.catch (function (error){
		res.status(error.response.status).send(error.response.data)
	})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})