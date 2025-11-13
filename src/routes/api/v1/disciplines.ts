import { Router } from 'express'
import { getHorseDisciplines } from '../../../controllers/horses'

const router: Router = Router()

router.get('/', getHorseDisciplines)

export default router