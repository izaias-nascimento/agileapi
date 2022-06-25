
import './bootstrap'
import { logger } from './utils/logger'
// const AppError = require("./errors/AppError");
import './database'
import gracefulShutdown from 'http-graceful-shutdown'
import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())
// app.use(routes);
app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})
app.use(routes)

const server = app.listen(process.env.PORT, () => {
  logger.info(`Server started on port: ${process.env.PORT}`)
})

gracefulShutdown(server)
