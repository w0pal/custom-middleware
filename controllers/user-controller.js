const userModel = require('../models/user-model')

const getAllUsers = (req,res)=>{
    try {
        const users = userModel.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
    }
}

const getUserByIndex = (req,res)=>{
    try {
        const user = userModel.getUserByIndex(req.params.index)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }
}

const deleteUserByIndex = (req,res)=>{
    try {
        const user = userModel.deleteUserByIndex(req.params.index)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllUsers,getUserByIndex,deleteUserByIndex}