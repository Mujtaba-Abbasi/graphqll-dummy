import express from "express";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import { RESOLVER } from "./Apollo/Resolvers/index.js";
import { TYPE_DEFINITIONS } from "./Apollo/TypeDefs/index.js";

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    resolvers: RESOLVER,
    typeDefs: TYPE_DEFINITIONS,
  });

  app.use(bodyParser.json());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => {
    console.log("Server started at port: 8000");
  });
}

startServer();
