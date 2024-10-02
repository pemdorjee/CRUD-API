import express from 'express'
const router = express.Router();
import handlers from "../controller/product.controller.js"


router.get ('/',handlers.getallProducts )
router.get ('/:id', handlers.getProductbyID)
router.post('/', handlers.createProduct)
router.put('/:id', handlers.updateProduct)
router.delete('/:id', handlers.deleteProduct)

export default router;