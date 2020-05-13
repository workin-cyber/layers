const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://admin:admin123@cluster0-5hpqm.mongodb.net/test?retryWrites=true&w=majority',
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
    return userModel.find()
}

const getUser = async (id) => {

}

const getUserByEmail = async (email) => {

}

const createUser = async (data) => {
    return userModel.create(data)
}

module.exports = { getUsers, getUser, createUser, getUserByEmail }