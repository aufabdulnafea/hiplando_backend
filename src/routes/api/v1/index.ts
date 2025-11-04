import { Router } from 'express'

import userRouter from './user'

const router: Router = Router()
router.use('/upload', (req, res, next) => {
    const { body } = req
})

export default router

