import { peopleList, getById, 
  getMovieById, getMovies, 
  addMovie, deleteMovie } from "./dummyData";

import { getYtsMovieById, getYtsMovies, getYtsSuggestions } from "./movieAPI"; 

/**
 * # schema
 *    - req에 대한 res type 스펙을 작성
 *    - schema: 개요, 윤관이라는 의미 그대로임)
 *    - query - select 용도
 *    - Mutation - update, delete 용도    
 *    - query에 hello가 있다면 
  *     1. resolver에 정의 되어 있어야 한다. 
  *     2. 사용자가 req 하는 naming이다.
 * 
 * # resolver
 *  * query를 resolve하는 것
 *  * 원하는 대로 프로그램이 할 수 있는 부분
 *  * 메모리, 다른 api로 갈 수 있음.
 * 
 * ## Query 
 *  * select  
 * 
 * ## Mutation
 *  * creat, update, delete
 * 
 * # GraphQL은 specification을 서버에 정의해 놓고 있다. 
 *  그래서 GraphQL 서버에서 할 작업은 어떤 Query, Mutation을 가졌는지 알려 주는 것이다.
 *  
 */

const resolvers = { 
  Query: { 
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    
    person: (_, { id }) => getById(id),
    people: () => {
      console.log("### arguments: ", arguments[1]);
      return peopleList;
    },
 
    movie: (_, { id }) => getMovieById(id),
    movies: () => getMovies(),

    ytsMovie: (_, { id }) => getYtsMovieById(id),
    ytsMovies: (_, { limit, rating }) => getYtsMovies(limit, rating),
    ytsSuggestions: (_, { id }) => getYtsSuggestions(id)    
  },
  
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id) 
  }
}

export { resolvers };
 