import { Router } from 'express'
import { processImages, upload } from '../../../controllers/upload'
import { createHorse, getHorseCategories, getHorseDisciplines, getHorseGenders } from '../../../controllers/horses'

const router: Router = Router()

router.post('/create',
    upload.fields([
        { name: "photos", maxCount: 3 },
        { name: "vetReport", maxCount: 1 },
        { name: "xrayResults", maxCount: 1 },
    ]),
    processImages,
    createHorse
)

router.post('/add-favorite', () => { })
router.post('/remove-favorite', () => { })

export default router