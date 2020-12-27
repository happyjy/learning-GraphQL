// # 사용자가 요청할 것을 작성 
//    1. query - select 용도
//    2. Mutation - update, delete 용도 
// # GraphQL은 specification을 서버에 정의해 놓고 있다. 
//   그래서 GraphQL 서버에서 할 작업은 어떤 Query, Mutation을 가졌는지 알려 주는 것이다.


// query에 hello
//  1. resolver에 정의 되어 있어야 한다. 
//  2. 사용자가 req 하는 naming이다.
const Jyoon = `
  type Jyoon {
    name: String!
    age: Int!
    gender: String!
  }
`
const typeDefs = `
  type Query {
    hello(name: String): String!,
    person: Jyoon
  } 
 `
 
export { typeDefs }
 