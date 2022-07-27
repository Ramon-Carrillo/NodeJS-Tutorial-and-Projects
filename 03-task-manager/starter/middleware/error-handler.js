const { CustomAPIError } = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    res.status(err.statusCode).json({ message: err.message })
  }
  res.status(500).send({ msg: 'Something went wrong' })
}

module.exports = errorHandlerMiddleware
