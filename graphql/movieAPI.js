import axios from "axios";
import fetch from "node-fetch";

// const API_URL = "https://yts.am/api/v2/list_movies.json?";
// const API_URL = "https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=8"

// const BASE_URL = "https://yts-proxy.now.sh/";
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;


// export const getMovies = (limit, rating) => {
//   let REQUEST_URL = LIST_MOVIES_URL;
//   if (limit > 0) {
//     REQUEST_URL += `limit=${limit}`;
//   }
//   if (rating > 0) {
//     REQUEST_URL += `&minimum_rating=${rating}`;
//   }
//   return fetch(REQUEST_URL)
//     .then(res => res.json())
//     .then(json => json.data.movies);
// };

export const getYtsMovies = async (limit = 20, rating = 8) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });

  console.log(`### getYtsMovies: ` + {limit, rating})
  return movies;
};

export const getYtsMovieById= async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });

  console.log(`### getYtsMovieById: ` + id)
  console.log(typeof id);
  console.log(typeof +id);
  console.log(typeof parseInt(id));
  return movie;
};

export const getYtsSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
}