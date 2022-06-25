import { Router } from 'express'
// import isAuth from '../middleware/isAuth'

import * as CrmController from '../controllers/CrmController'

const crmRouter = Router()

crmRouter.get('/crm', CrmController.index)

// crmRouter.post("/crm", CrmController.store);

crmRouter.get('/crm/:crmId', CrmController.show)

// crmRouter.put('/crm/:crmId', CrmController.update)

// crmRouter.delete("/queue/:queueId", isAuth, CrmController.remove);

export default crmRouter
