const userController = require('../controllers/user-controller')
const express = require('express')
const router = express.Router()
const userAuth = require('../middlewares/user-auth')

router.get('/',userController.getAllUsers)
router.get('/:index',userAuth,userController.getUserByIndex)
router.delete('/:index',userAuth,userController.deleteUserByIndex)
module.exports = router
