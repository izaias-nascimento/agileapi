import { Sequelize } from 'sequelize-typescript'
import ItemOrcamento from '../models/ItemOrcamento';
import Lead from '../models/Lead';
import Orcamento from '../models/Orcamento';
import Produto from '../models/Produto';

// eslint-disable-next-line
const dbConfig = require("../config/database");
// import dbConfig from '../config/database'

const sequelize = new Sequelize(dbConfig)

const models = [
  Produto,
  Lead,
  ItemOrcamento,
  Orcamento
]

sequelize.addModels(models)

export default sequelize
