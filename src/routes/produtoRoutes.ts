import { Router } from 'express'
// import isAuth from '../middleware/isAuth'

import * as ProdutoController from '../controllers/ProdutosController'

const produtosRouter = Router()

produtosRouter.get('/produto', ProdutoController.index)

// produtosRouter.post("/produto", ProdutoController.store);

produtosRouter.get('/produto/:produtoId', ProdutoController.show)

// produtosRouter.put('/produto/:produtoId', ProdutoController.update)

// produtosRouter.delete("/queue/:queueId", isAuth, ProdutoController.remove);

export default produtosRouter
