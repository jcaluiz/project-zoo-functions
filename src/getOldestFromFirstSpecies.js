const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id1) => {
  const responsibleAnimals = data.employees.find(({ id }) => id.includes(id1)).responsibleFor;

  const animals = data.species.filter(({ id }) => responsibleAnimals[0].includes(id))
    .map(({ residents }) => residents.map(({ age }) => age));

  const biggerAge = animals.map((animal) => [...animal].reduce((a, b) => Math.max(a, b)));

  const bigger = biggerAge.reduce((a, b) => Math.max(a, b));

  const propriety = data.species.filter(({ id }) => responsibleAnimals.includes(id))
    .map(({ residents }) => residents.find(({ age }) => age === bigger))
    .find((element) => element !== undefined);

  return Object.values(propriety);
};

module.exports = getOldestFromFirstSpecies;
