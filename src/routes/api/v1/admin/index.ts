
import { Router } from 'express'
import horsesRouter from './horses'

const router: Router = Router()

router.use('/horses', horsesRouter)

export default router