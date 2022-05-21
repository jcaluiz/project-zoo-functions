const data = require('../data/zoo_data');

const [...people] = data.employees;

const isManager = (id) => people.some((person) => person.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  const personManager = people.filter((person) => person.managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);

  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    return personManager;
  } catch (error) {
    throw error.message;
  }
};

// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
