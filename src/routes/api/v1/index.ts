import { Router } from 'express'

import horsesRouter from './horses'
import usersRouter from './users'

const router: Router = Router()

router.use('/horses', horsesRouter)
router.use('/users', usersRouter)

export default router

