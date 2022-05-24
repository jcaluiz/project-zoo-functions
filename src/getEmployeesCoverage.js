const data = require('../data/zoo_data');

const allEmployees = (...param) => {
  const paramValue = Object.values(param);
  const namePerson = data.employees.filter(({ firstName, lastName, id }) => firstName
    .includes(paramValue) || lastName.includes(paramValue) || id.includes(paramValue));
  const animals = namePerson.map(({ responsibleFor }) => responsibleFor);
  const idAnimals = animals[0];
  const species = data.species.filter(({ id }) => idAnimals.includes(id)).map(({ name }) => name);
  const locations = data.species.filter(({ id }) => idAnimals.includes(id))
    .map(({ location }) => location);
  const allName = namePerson.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  const fullName = allName[0];
  const newObject = namePerson.map(({ id }) => ({ id, fullName, species, locations }));
  return newObject[0];
};

const todosEmpregados = [allEmployees('Nigel'), allEmployees('Burl'), allEmployees('Ola'),
  allEmployees('Wilburn'), allEmployees('Stephanie'), allEmployees('Sharonda'),
  allEmployees('Ardith'), allEmployees('Emery')];

const getEmployeesCoverage = (param) => {
  if (param === undefined) { return todosEmpregados; }
  const paramValue = Object.values(param);
  const allNames = data.employees.map(({ firstName, lastName, id }) =>
    firstName === paramValue[0] || lastName === paramValue[0] || id === paramValue[0])
    .find((element) => element === true);
  if (allNames !== true) {
    throw new Error('Informações inválidas');
  }
  try {
    return allEmployees(paramValue);
  } catch (error) {
    throw error.message;
  }
};

module.exports = getEmployeesCoverage;
