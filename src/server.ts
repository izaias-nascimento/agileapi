
import './bootstrap'
import { logger } from './utils/logger'
// const AppError = require("./errors/AppError");
import './database'
import gracefulShutdown from 'http-graceful-shutdown'
import express from 'express'
import routes from './routes'
import cors from 'cors'

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')

const app = express()
app.use(cors())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
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
