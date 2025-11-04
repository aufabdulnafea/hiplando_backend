import { Router } from 'express'
import v1Router from './api/v1'

const router: Router = Router()
router.use('/api/v1', v1Router)

export default router

