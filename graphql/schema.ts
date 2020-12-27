const Jyoon = `
  type Jyoon {
    name: String!
    age: Int!
    gender: String!
  }
`
const typeDefs = `
  type Query {
    hello(name: String): String!
    person: Jyoon
  } 
 `
 
export { typeDefs }
 