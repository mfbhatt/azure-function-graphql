
const {selectAllUsers} = require("./../dbhelper/pghelper");
// const Users = [{
//     id:1,firstName:'Farooq', lastName: 'Mohmmad', fullName: 'Mohmmad Farooq'

// }];

const resolvers = {
    Query: {
    //   user: () => {return "Hello from our GraphQL backend!"},
    //   books: () =>{ return  "Return from bookds"},
    //   getAllUsers: () => {return selectAllUsers()}
        user(){
            return "Hello from our GraphQL backend!"
        },
        books(){
            return  "Return from bookds"
        },
        async getAllUsers(){
            return await selectAllUsers()
        }
    }
  };
module.exports = {resolvers};