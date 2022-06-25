const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger/swagger_output.json'
const endpointsFiles = ['./dist/routes/*']

swaggerAutogen(outputFile, endpointsFiles)
