const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const [{ residents }] = data.species.filter(({ name }) => animal === name);
  return residents.every((resident) => resident.age >= age);
};

console.log(getAnimalsOlderThan('bears', 4));

module.exports = getAnimalsOlderThan;
