const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName = '{}') => {
  const { employees } = data;
  const [empregados] = employees.filter(({ firstName, lastName }) => firstName
  === employeeName || lastName === employeeName);
  return (empregados === undefined) ? ({}) : (empregados);
};

module.exports = getEmployeeByName;
