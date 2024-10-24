require('dotenv').config()
// Async error handling

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Store API')
})

// Products routes

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch (error) {
    console.error(error)
  }
}
start()
