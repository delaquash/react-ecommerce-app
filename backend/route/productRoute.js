const { Router } = require('express');
const express = require('express');

const router = express.Router()

res.get('/', (req, res) => {
    res.json(products)
})

res.get('/api/products', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

module.exports = Router;