const data = require('../data/zoo_data');

const getAnimalMap = (options) => {
  if (!options) {
    const location1 = data.species.map(({ location }) => location);
    const animalsLocations = data.species.filter(({ location }) => location1.includes(location));
    const animalsLocationsSeparate = animalsLocations.map(({ name, location }) => ({ [location]: [name] }));
    // const locationKeys = Object.values(animalsLocationsSeparate);
    return animalsLocationsSeparate.filter((element) => location1.includes(element));
  }
};

console.log(getAnimalMap());

module.exports = getAnimalMap;

// const allElement = data.species.reduce((acc, curr, index) => Object
//   .assign(acc, { [curr.location]: [curr.name] }), {});
// return allElement;
