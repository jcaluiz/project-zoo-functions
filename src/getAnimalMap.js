const data = require('../data/zoo_data');

const allAnimals = () => {
  const NE = data.species.filter(({ location }) => location.includes('NE'))
    .map(({ name }) => name);
  const NW = data.species.filter(({ location }) => location.includes('NW'))
    .map(({ name }) => name);
  const SE = data.species.filter(({ location }) => location.includes('SE'))
    .map(({ name }) => name);
  const SW = data.species.filter(({ location }) => location.includes('SW'))
    .map(({ name }) => name);
  return { NE, NW, SE, SW };
};

const animalsType = (region, number) => {
  const { species } = data;
  return species.filter(({ location }) => location.includes(region))
    .filter(({ residents }) => residents).map(({ name }) => name)[number];
};

const animalsName = (animalsTypeFunc) => {
  const { species } = data;
  const array = [];
  species.filter(({ name }) => name === animalsTypeFunc)
    .map(({ residents }) => residents.reduce((acc, curr, index) => array.push(curr.name), []));
  return array;
};

const animalsNameForSex = (animalsTypeFunc, genreSex) => {
  const { species } = data;
  const array = [];
  species.filter(({ name }) => name === animalsTypeFunc)
    .map(({ residents }) => residents.filter(({ sex }) => sex === genreSex)
      .reduce((acc, curr, index) => array.push(curr.name), []));
  return array;
};

const funcaoDoIncludeName = () => ({
  NE: [
    { [animalsType('NE', 0)]: animalsName(animalsType('NE', 0)) },
    { [animalsType('NE', 1)]: animalsName(animalsType('NE', 1)) },
  ],
  NW: [
    { [animalsType('NW', 0)]: animalsName(animalsType('NW', 0)) },
    { [animalsType('NW', 1)]: animalsName(animalsType('NW', 1)) },
    { [animalsType('NW', 2)]: animalsName(animalsType('NW', 2)) },
  ],
  SE: [
    { [animalsType('SE', 0)]: animalsName(animalsType('SE', 0)) },
    { [animalsType('SE', 1)]: animalsName(animalsType('SE', 1)) },
  ],
  SW: [
    { [animalsType('SW', 0)]: animalsName(animalsType('SW', 0)) },
    { [animalsType('SW', 1)]: animalsName(animalsType('SW', 1)) },
  ],
});

const funcaoDoIncludeNameSorted = () => ({
  NE: [
    { [animalsType('NE', 0)]: animalsName(animalsType('NE', 0)).sort() },
    { [animalsType('NE', 1)]: animalsName(animalsType('NE', 1)).sort() },
  ],
  NW: [
    { [animalsType('NW', 0)]: animalsName(animalsType('NW', 0)).sort() },
    { [animalsType('NW', 1)]: animalsName(animalsType('NW', 1)).sort() },
    { [animalsType('NW', 2)]: animalsName(animalsType('NW', 2)).sort() },
  ],
  SE: [
    { [animalsType('SE', 0)]: animalsName(animalsType('SE', 0)).sort() },
    { [animalsType('SE', 1)]: animalsName(animalsType('SE', 1)).sort() },
  ],
  SW: [
    { [animalsType('SW', 0)]: animalsName(animalsType('SW', 0)).sort() },
    { [animalsType('SW', 1)]: animalsName(animalsType('SW', 1)).sort() },
  ],
});

const funcaoDoIncludeNameSex = (element) => ({
  NE: [
    { [animalsType('NE', 0)]: animalsNameForSex(animalsType('NE', 0), element.sex) },
    { [animalsType('NE', 1)]: animalsNameForSex(animalsType('NE', 1), element.sex) },
  ],
  NW: [
    { [animalsType('NW', 0)]: animalsNameForSex(animalsType('NW', 0), element.sex) },
    { [animalsType('NW', 1)]: animalsNameForSex(animalsType('NW', 1), element.sex) },
    { [animalsType('NW', 2)]: animalsNameForSex(animalsType('NW', 2), element.sex) },
  ],
  SE: [
    { [animalsType('SE', 0)]: animalsNameForSex(animalsType('SE', 0), element.sex) },
    { [animalsType('SE', 1)]: animalsNameForSex(animalsType('SE', 1), element.sex) },
  ],
  SW: [
    { [animalsType('SW', 0)]: animalsNameForSex(animalsType('SW', 0), element.sex) },
    { [animalsType('SW', 1)]: animalsNameForSex(animalsType('SW', 1), element.sex) },
  ],
});

const funcaoDoIncludeNameSexSorted = (element) => ({
  NE: [
    { [animalsType('NE', 0)]: animalsNameForSex(animalsType('NE', 0), element.sex).sort() },
    { [animalsType('NE', 1)]: animalsNameForSex(animalsType('NE', 1), element.sex).sort() },
  ],
  NW: [
    { [animalsType('NW', 0)]: animalsNameForSex(animalsType('NW', 0), element.sex).sort() },
    { [animalsType('NW', 1)]: animalsNameForSex(animalsType('NW', 1), element.sex).sort() },
    { [animalsType('NW', 2)]: animalsNameForSex(animalsType('NW', 2), element.sex).sort() },
  ],
  SE: [
    { [animalsType('SE', 0)]: animalsNameForSex(animalsType('SE', 0), element.sex).sort() },
    { [animalsType('SE', 1)]: animalsNameForSex(animalsType('SE', 1), element.sex).sort() },
  ],
  SW: [
    { [animalsType('SW', 0)]: animalsNameForSex(animalsType('SW', 0), element.sex).sort() },
    { [animalsType('SW', 1)]: animalsNameForSex(animalsType('SW', 1), element.sex).sort() },
  ],
});

const sortedVerify = (element) => {
  const keys = (element === undefined) ? ('') : (Object.keys(element));
  if (keys.includes('sorted') && keys.includes('sex')) {
    return funcaoDoIncludeNameSexSorted(element);
  }
  if (keys.includes('sorted')) {
    return funcaoDoIncludeNameSorted();
  }
};

const sexVerify = (element) => {
  const keys = (element === undefined) ? ('') : (Object.keys(element));
  if (keys.includes('sex') || Object.values(element)
    .includes('male') || Object.values(element).includes('female')) {
    return funcaoDoIncludeNameSex(element);
  }
};

const verifyUndefined = (element) => {
  const keys = (element === undefined) ? ('') : (Object.keys(element));
  return keys;
};

const includesVerify = (element) => {
  const keys = verifyUndefined(element);
  if (keys.includes('includeNames') && keys.length === 1) {
    return funcaoDoIncludeName();
  }
};

const getAnimalMap = (options) => {
  const keys = verifyUndefined(options);
  if (!keys.includes('includeNames')) {
    return allAnimals();
  }
  if (keys.length === 1) {
    return includesVerify(options);
  }
  if (keys.includes('sorted')) {
    return sortedVerify(options);
  }
  if (keys.includes('sex')) {
    return sexVerify(options);
  }
};

module.exports = getAnimalMap;
