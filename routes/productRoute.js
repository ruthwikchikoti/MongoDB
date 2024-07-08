const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const e = require('express')



router.post('/', ProductController.createproducts)



router.get('/', ProductController.getallProducts)


router.get('/:id', ProductController.getById)


router.put('/:id', ProductController.updateProduct)


router.delete('/:id', ProductController.deleteProduct)


module.exports = router