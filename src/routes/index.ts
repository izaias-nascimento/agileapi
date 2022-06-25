import { Router } from 'express'
import leadRouter from './leadRoutes'
import orcamentoRouter from './orcamentoRoutes'

import ProdutosRouter from './produtoRoutes'

const routes = Router()

routes.use(ProdutosRouter)
routes.use(leadRouter)
routes.use(orcamentoRouter)

export default routes
