const mongoose = require('mongoose')

mongoose.connect(
    process.env.MongoConnectionString,
    { autoReconnect: true }
    , (err) => {
        if (err) throw 'mongo connection problem'
        else console.log('mongo connected')
    })

const userScheme = {
    id: String,
    name: String,
    email: String,
    password: {
        type: String,
        select: false
    }
}

const userModel = mongoose.model('users', userScheme)

const getUsers = async () => {
    return userModel.find({}, 'id name')
}

const getUser = async (id) => {
    return userModel.findById(id)
}

const getUserByEmail = async (email) => {
    return userModel.findOne({ email })
}

const updateUser = async (newUser) => {
    return userModel.findOneAndUpdate({ id: newUser.id }, newUser, { runValidators: true, new: true })
}

const createUser = async (data) => {
    return userModel.create(data)
}

module.exports = { getUsers, getUser, createUser, getUserByEmail, updateUser }