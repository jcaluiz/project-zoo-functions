const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter(({ age }) => age < 18);
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50);
  const senior = entrants.filter(({ age }) => age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const childPeople = entrants.filter(({ age }) => age < 18);
  const adultPeople = entrants.filter(({ age }) => age >= 18 && age < 50);
  const seniorPeople = entrants.filter(({ age }) => age >= 50);
  const { adult, senior, child } = data.prices;
  return parseInt(childPeople.length, 10) * child + parseInt(adultPeople
    .length, 10) * adult + parseInt(seniorPeople.length, 10) * senior;
};

module.exports = { calculateEntry, countEntrants };
