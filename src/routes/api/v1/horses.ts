import { Router } from 'express'
import { authenticateFirebase } from '../../../middlewares/authenticate-firebase'
import { createHorse } from '../../../controllers/horses'
import { upload } from '../../../controllers/upload'

const router: Router = Router()

router.post('/create',
    authenticateFirebase,
    upload.fields([
        { name: "photos", maxCount: 3 },
        { name: "vetReport", maxCount: 1 },
        { name: "xrayResults", maxCount: 1 },
    ]),
    createHorse
)

router.post('/add-favorite', () => { })
router.post('/add-remove', () => { })

export default router