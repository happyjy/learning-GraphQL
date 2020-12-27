export const peopleList = [
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

export const getById = id => {
  return peopleList.filter(person => id === person.id)[0];
}