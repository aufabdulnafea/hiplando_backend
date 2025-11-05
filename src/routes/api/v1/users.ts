import { Router } from 'express'
import { authenticateFirebase } from '../../../middlewares/authenticate-firebase'
import { register } from '../../../controllers/users'

const router: Router = Router()

router.post('/register', authenticateFirebase, register)

export default router