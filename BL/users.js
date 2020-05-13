const uniqid = require('uniqid'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    secret = 'greatSecret'

function createToken(email) {
    return jwt.sign({ email }, secret, { expiresIn: '30d' })
}

function verifyToken(email, token) {
    try {
        const tokenData = jwt.verify(token, secret)
        return tokenData.email == email
    } catch (error) {
        return false
    }
}

module.exports = function Users(DL) {

    return {
        read: (data) => {
            const { email, token } = data
            if (!verifyToken(email, token))
                throw 'unauthorized'
            return DL.getUsers()
        },

        readOne: (id) => {
            return DL.getUser(id)
        },

        /*   create: (data) => {
              //TODO validation
              data.id = uniqid()
              return DL.createUser(data)
          }, */

        register: async (data) => {
            //TODO validation
            if (!data.password) throw 'password is required'

            data.password = bcrypt.hashSync(data.password, 8)
            data.id = uniqid()

            await DL.createUser(data)

            return { token: createToken(data.email) }
        },

        login: async (data) => {
            const { email, password } = data
            if (!email) throw 'email is required'
            if (!password) throw 'password is required'
            const user = await DL.getUserByEmail(email)
            if (!bcrypt.compareSync(password, user.password))
                throw 'password and email dont match'
            return { token: createToken(email) }
        },

        update: () => {

        },

        delete: () => {

        }
    }

    /*  function read() {
         return DL.getUsers()
     }
 
     return { read } */
}