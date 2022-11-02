import { ApolloServer } from "apollo-server-azure-functions";
 const {typeDefs} = require("./../schema/TypeDefs");
 const {resolvers} = require("./../schema/Resolvers")


// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: true
});

export default server.createHandler({
  cors: {
    origin: ['*', "https://studio.apollographql.com"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["access-control-allow-credentials", "access-control-allow-origin", "content-type"]
  },
});