import { Router } from 'express'
import { processImages, upload } from '../../../controllers/upload'
import { addToFavorites, createHorse, removeFromFavorites } from '../../../controllers/horses'

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

router.get('/favorite/:horseId', addToFavorites)
router.delete('/favorite/:horseId', removeFromFavorites)

export default router