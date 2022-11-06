const BaseRepository = require('../baseRepository');
const UserEntity = require('./user.entity');
const jwt = require('jsonwebtoken');
const { v4 } = require('uuid');
class UserRepository extends BaseRepository {
    constructor(params) {
        super(params)
    }
    async getAllUsers({ userId, username }) {
        // this.authenticate()
        let query = {}
        if (userId) query = { userId }
        if (username) query = { ...query, username }
        let result = await UserEntity.find(query);
        return this.serviceResult(result)
    }
    async signIn({ username, password }) {
        let info = await UserEntity.findOne({ username, password })
        if (!info) this.raiseError("username and password is not valid")
        return this.serviceResult({
            username, accessToken: jwt.sign({
                sub: info.userId,
                username
            }, this.jwtSecret)
        })
    }
    async signUp({ username, password, name }) {
        let userEntity = new UserEntity({ username, password, name })
        let userExist = await UserEntity.findOne({ username })
        if (userExist) this.raiseError("username is not valid")
        await userEntity.save();
        return this.serviceResult(userEntity)
    }


} ``
module.exports = UserRepository;