const human = {
  name: "sangho",
  age: 30,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => human,
  },
};

export default resolvers;
