const dataStudent = ['Rendi','Cecil','Ronaldo','Messi']

const getAllUsers = () =>{
    return dataStudent
}

const getUserByIndex = (index) =>{
    if(index <=0){
        return "Index must be greater than zero"
    }
    if (index > dataStudent.length){
        return "Index not found"
    }

    return dataStudent[index-1]

}

const deleteUserByIndex = (index) => {
    if(index <=0){
        return "Index must be greater than zero"
    }
    if (index > dataStudent.length){
        return "Index not found"
    }
    dataStudent.splice(index-1,1)
    return dataStudent
}

module.exports = {getAllUsers,getUserByIndex, deleteUserByIndex}