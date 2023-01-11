const express = require('express')
const router = express.Router()
const product_controller = require('./controllers/products')
const product_category_controller = require('./controllers/product_categories')

router.get('/v0/products', product_controller.products_get)
router.get('/v0/products/:id', product_controller.product_get_one)

router.get('/v0/product_categories', product_category_controller.product_categories_get)
router.get('/v0/product_categories/:id', product_category_controller.product_categories_get_one)
router.get('/v0/product_categories/:id/products', product_controller.products_get_by_category)

module.exports = router
