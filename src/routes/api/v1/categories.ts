import { Router } from 'express'
import { getHorseCategories } from '../../../controllers/horses'

const router: Router = Router()

router.get('/', getHorseCategories)

export default router