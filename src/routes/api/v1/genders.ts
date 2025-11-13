import { Router } from 'express'
import {getHorseGenders} from '../../../controllers/horses'

const router: Router = Router()

router.get('/', getHorseGenders)

export default router