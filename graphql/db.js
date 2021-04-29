export const people = [
  {
    id: 0,
    name: "sangho",
    age: 30,
    gender: "male",
  },
  {
    id: 1,
    name: "jinhyun",
    age: 30,
    gender: "male",
  },
  {
    id: 2,
    name: "minwoo",
    age: 30,
    gender: "male",
  },
  {
    id: 3,
    name: "seho",
    age: 30,
    gender: "male",
  },
  {
    id: 4,
    name: "siri",
    age: 30,
    gender: "male",
  },
  {
    id: 5,
    name: "hose",
    age: 30,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
