import { Sequelize } from 'sequelize-typescript'
import Produtos from '../models/Produtos'

// eslint-disable-next-line
const dbConfig = require("../config/database");
// import dbConfig from '../config/database'

const sequelize = new Sequelize(dbConfig)

const models = [
  Produtos
]

sequelize.addModels(models)

export default sequelize
