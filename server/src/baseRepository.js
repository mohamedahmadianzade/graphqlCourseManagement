const { GraphQLError } = require("graphql")
const jsonwebtoken = require("jsonwebtoken")

class BaseRepository {
    constructor(param) {
        this.jwtSecret = param?.jwtSecret
        this.accessToken = param?.accessToken
    }
    serviceResult(data, message = "success service") {
        return {
            data, message
        }
    }
    raiseError(message = "Error!") {
        throw new GraphQLError(message)
    }
    authenticate() {
        if (!this.accessToken) this.raiseError("invalid access")
        jsonwebtoken.verify(this.accessToken, this.jwtSecret)
    }
}
module.exports = BaseRepository