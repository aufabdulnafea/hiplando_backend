import { Router } from 'express'
import { requireAdmin, requireAuth } from '../../../middlewares/express-auth-middleware'

import horsesRouter from './horses'
import usersRouter from './users'
import adminRouter from './admin'
import gendersRouter from './genders'
import categoriesRouter from './categories'
import disciplinesRouter from './disciplines'

const router: Router = Router()

// public routes
router.use('/genders', gendersRouter)
router.use('/categories', categoriesRouter)
router.use('/disciplines', disciplinesRouter)

// protected routes
router.use('/horses', requireAuth, horsesRouter)
router.use('/users', requireAuth, usersRouter)

// admin routes
router.use('/admin', requireAuth, requireAdmin, adminRouter)

export default router

