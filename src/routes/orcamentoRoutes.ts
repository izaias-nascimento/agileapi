import { Router } from 'express'
// import isAuth from '../middleware/isAuth'

import * as OrcamentoController from '../controllers/OrcamentosController'

const orcamentoRouter = Router()

orcamentoRouter.get('/orcamento', OrcamentoController.index)

// orcamentoRouter.post("/produto", OrcamentoController.store);

orcamentoRouter.get('/orcamento/:orcamentoId', OrcamentoController.show)

// orcamentoRouter.put('/produto/:produtoId', OrcamentoController.update)

// orcamentoRouter.delete("/queue/:queueId", isAuth, OrcamentoController.remove);

export default orcamentoRouter
