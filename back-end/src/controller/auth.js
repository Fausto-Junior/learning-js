const jwt = require('jsonwebtoken')

module.exports.login = (req, res) => {
  console.log(req.body)
  const token = jwt.sign({
    name: 'fausto',
  }, process.env.JWT_SECRET)
  res.status(200).send({
    token: token,
  })
}
