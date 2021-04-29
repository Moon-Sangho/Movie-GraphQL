import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers: resolvers,
});

// check at localhost:4000
server.start(() => console.log("Graphql Server Running..."));
