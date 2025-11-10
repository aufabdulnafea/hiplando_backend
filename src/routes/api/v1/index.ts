import { Router } from 'express'
import { requireAdmin, requireAuth } from '../../../middlewares/express-auth-middleware'

import horsesRouter from './horses'
import usersRouter from './users'
import adminRouter from './admin'

const router: Router = Router()

router.use('/horses', requireAuth, horsesRouter)
router.use('/users', requireAuth, usersRouter)

// admin router
// router.use('/admin', requireAuth, requireAdmin, adminRouter)
router.use('/admin', adminRouter)

export default router

