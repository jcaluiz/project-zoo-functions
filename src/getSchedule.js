const data = require('../data/zoo_data');

const officeHour = 'Open from 8am until 6pm';
const officeHour2 = 'Open from 10am until 8pm';
const officeHour3 = 'Open from 8am until 10pm';

const obj = {
  Tuesday: {
    officeHour,
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour,
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: officeHour2,
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: officeHour2,
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: officeHour3,
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const animals = data.species.map(({ name }) => name);

const getSchedule = (scheduleTarget) => {
  if (Object.keys(obj).includes(scheduleTarget)) {
    return ({ [scheduleTarget]: { ...obj }[scheduleTarget] });
  }
  if (animals.find((animal) => animal.includes(scheduleTarget))) {
    return data.species.find(({ name }) => name
      .includes(scheduleTarget)).availability;
  }
  if (!scheduleTarget || scheduleTarget !== animals) {
    return obj;
  }
};

module.exports = getSchedule;
