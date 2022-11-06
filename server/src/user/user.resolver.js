const UserRepository = require("./user.repository")

const userResolvers = {
    Query: {
        user: (_, params, { accessToken, jwtSecret }) => {
            return new UserRepository({ accessToken, jwtSecret }).getAllUsers(params)
        },
        signIn: (_, params, { jwtSecret }) => {
            return new UserRepository({ jwtSecret }).signIn(params)
        }
    },
    Mutation: {
        signUp(_, params) {
            return new UserRepository().signUp(params)
        }
    }
}
module.exports = userResolvers