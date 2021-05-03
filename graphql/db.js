import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  let movie = null;

  await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  }).then((res) => (movie = res.data.data.movie));

  return movie;
};

export const getSuggestions = async (id) => {
  let movies = null;

  await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  }).then((res) => (movies = res.data.data.movies));

  return movies;
};
