const asyncHandler = require("express-async-handler");
const express = require('express');
const Product = require('../Model/productModel');
const products = require('../data/products');
const router = express.Router();


// @desc  Fetch all product
// @route  GET /api/products
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))


// @desc  Fetch single product
// @router  GET /api/products/:id
// @access  Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await products.find((p) => p._id === req.params.id)

    if (product) {
        res.json(product)
    } else {
       res.status(404).json({ message: "Product does not exist."}) 
    }
    
}))

module.exports = router;