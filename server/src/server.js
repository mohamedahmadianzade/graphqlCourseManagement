require('dotenv').config();
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const server = new ApolloServer({
    typeDefs, resolvers, formatError: (fr, err) => {
        return {
            message: fr.message
        }
    }

});

async function initMongo() {
    await mongoose.connect(`mongodb://${process.env.MONGOSERVER}:${process.env.MONGOPORT}/${process.env.MONGODATABASE}`)
    console.log("--------- Mongo ------------");
    console.log("Successfully connceted to courseManagement dataabase");
    console.log("--------- Mongo ------------");
}



async function start() {
    await initMongo()
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async ({ req, res }) => {

            return {
                jwtSecret: process.env.jwtSecret,
                accessToken: req?.headers?.authorization
            }
        }
    });
    console.log("-------- Apollo Server -------------");
    console.log(`🚀  Server ready at: ${url} `);
    console.log("-------- Apollo Server -------------");
}
start()
