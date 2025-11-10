import { Router } from 'express'
import {
    postHorseCategory, deleteHorseCategory, patchHorseCategory,
    postHorseGender, deleteHorseGender, patchHorseGender,
    postHorseDiscipline, deleteHorseDiscipline, patchHorseDiscipline
} from '../../../../controllers/admin/horses'
import { upload, processImages } from '../../../../controllers/upload'

const router: Router = Router()

// all following are admin only routes
// Horse category
router.post('/category', upload.fields([{ name: "image", maxCount: 1 }]), processImages, postHorseCategory) // add
router.delete('/category/:id', deleteHorseCategory) // delete
router.patch('/category/:id', patchHorseCategory) // partial update

// Horse genders
router.post('/gender', postHorseGender) // add
router.delete('/gender/:id', deleteHorseGender) // delete
router.patch('/gender/:id', patchHorseGender) // partial update

// Horse discipline 
router.post('/discipline', postHorseDiscipline) // add
router.delete('/discipline/:id', deleteHorseDiscipline) // delete
router.patch('/discipline/:id', patchHorseDiscipline) // partial update

export default router