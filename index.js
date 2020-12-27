import { GraphQLServer } from "graphql-yoga"
// import { typeDefs } from "./graphql/schema"
import { resolvers } from "./graphql/resolvers"

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `

// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//   },
// }


// No schema defined 라는 에러가 나온다. 
// # schema: 사용자에게 보내거나 사용자로 부터 받을 data에 대한 설명
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});
 
server.start(() => console.log("Graphql Server Running"));