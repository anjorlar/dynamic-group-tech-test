const express = require('express')
const router = express.Router()
const itemController = require('../controllers/index')


router.get('/getItem/:id', itemController.getItemById)
router.get('/getAllItem', itemController.getAllItems)
module.exports = router