module.exports = function Users(DL) {

    return {
        read: () => {
            return DL.getUsers()
        },

        readOne: (id) => {
            return DL.getUser(id)
        },

        create: () => {

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