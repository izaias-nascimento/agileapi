import { Router } from 'express'
// import isAuth from '../middleware/isAuth'

import * as LeadController from '../controllers/LeadsController'

const leadRouter = Router()

leadRouter.get('/lead', LeadController.index)

// leadRouter.post("/produto", LeadController.store);

leadRouter.get('/lead/:leadId', LeadController.show)

// leadRouter.put('/produto/:produtoId', LeadController.update)

// leadRouter.delete("/queue/:queueId", isAuth, LeadController.remove);

export default leadRouter
