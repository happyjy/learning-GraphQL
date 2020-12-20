import { GraphQLServer } from "graphql-yoga"

const server = new GraphQLServer({
  // something will happen
});

server.start(() => console.log("Graphql Server Running"));