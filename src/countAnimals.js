const data = require('../data/zoo_data');

// const [animals] = data.species;

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, curr) => Object.assign(acc, { [curr
      .name]: curr.residents.length }), {});
  }

  const [animalName, animalSex] = Object.values(animal);

  const [{ residents }] = data.species.filter(({ name }) => animalName.includes(name));

  return (!animalSex) ? (residents.length) : (residents
    .filter(({ sex }) => sex === animalSex).length);
};

module.exports = countAnimals;
