const axios = require('axios')

const helpers = require('../helpers')

module.exports.getRecipients = (req, res) => {
  const url = helpers.mountURL('/recipients')
  axios.get(url)
    .then((response) => {
      res.status(response.status).send(response.data)
    })
    .catch((error) => {
      res.status(error.response.status).send(error.response.data)
    })
}
