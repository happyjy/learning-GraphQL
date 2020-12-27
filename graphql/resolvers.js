/**
 * # schema는 req에 대한 res type 스펙을 작성
 *    (schema: 개요, 윤관이라는 의미 그대로임)
 * # resolver
 *  * query를 resolve하는 것
 *  * 원하는 대로 프로그램이 할 수 있는 부분
 *  * 메모리, 다른 api로 갈 수 있음.
 * 
 */


const jyoon = {
  name: "jyoon", 
  age: 32,
  gender: 'male'
} 

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    person: () => jyoon
  },
}

export { resolvers };
 