const peopleList = [
  {
    id: 0,
    name: "jyoon", 
    age: 30,
    gender: 'male'
  },
  {
    id: 1,
    name: "bono", 
    age: 31,
    gender: 'male'
  },
  {
    id: 2,
    name: "boa", 
    age: 32,
    gender: 'female'
  } 
];

const getById = id => {
  return peopleList.filter(person => id === person.id)[0];
}

let movies = [
  {
    id: 0,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 1,
    name: "The noteBook",
    score: 9
  },
  {
    id: 2,
    name: "Logan",
    score: 7
  }
]

const getMovieById = id => movies.filter( movie => movie.id === id )[0];
const getMovies = () => movies;
const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if( moveis.length > cleanedMovies.length ){
    movies = cleanedMovies;
    return true; 
  } else {
    return false;
  }
}
const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name, 
    score
  }
  movies.push(newMovie);
  return newMovie;
}

export { peopleList, getById }
export { getMovies, getMovieById, addMovie, deleteMovie }