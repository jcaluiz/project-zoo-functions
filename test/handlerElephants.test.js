const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    const expected = 4;
    const actual = handlerElephants('residents').length;
    expect(actual).toEqual(expected);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const [...actual] = handlerElephants('residents').map(({ name }) => name);
    expect(actual).toStrictEqual(expected);
  });
  it('retorna a média de idade dos elefantes', () => {
    const averageAge = handlerElephants('residents').filter(({ age }) => age)
      .reduce((acc, curr) => acc + curr.age, 0) / handlerElephants('residents').length;
    const expected = 10.5;
    expect(averageAge).toEqual(expected);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');
    expect(actual).toEqual(expected);
  });
  it('retorna a popularidade dos elefantes', () => {
    const expected = 5;
    const actual = handlerElephants('popularity');
    expect(actual).toEqual(expected);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    const actual = handlerElephants('availability');
    expect(actual).toEqual(expected);
  });
});
