import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

// can check at localhost:4000 by writing like below code

// query {
//   movies {
//     name
//     score
//   }
// }

// {
//   movie(id: 1) {
//     name
//   }
// }

// mutation {
//   addMovie(name: "hello", score: 1) {
//     name
//   }
// }

export default resolvers;
