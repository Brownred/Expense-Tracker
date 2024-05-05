import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
 
import Resolvers from "./resolvers/index.js"
import TypeDefs from "./typeDefs/index.js"

dotenv.config();
const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: TypeDefs,
  resolvers: Resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
})
 
await server.start();

// Set up our Express middlware to handle CORS, body parsing, and our middlware function
app.use('/', cors(), express.json(), expressMiddleware(server, {context: async ({req})=> ({req}),}),);

// modified server starup
await new Promise((resolve) => {
  httpServer.listen({port:4000}, resolve)
});
 
console.log(`🚀 Server ready at http://localhost:4000/`)