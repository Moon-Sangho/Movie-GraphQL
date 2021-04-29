import { getById, people } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
  },
};

// can check at localhost:4000 by writing like below code
// query {
//   people {
//     name
//     age
//   }
// }

// {
//   person(id: 1) {
//     name
//   }
// }

export default resolvers;
