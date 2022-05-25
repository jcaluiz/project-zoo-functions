const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    expect(actual).toEqual(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = handlerElephants('names');
    expect(actual).toContain('Jefferson');
  });
  it('retorna a média de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    expect(actual).toBeCloseTo(10.5);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');
    expect(actual).toEqual(expected);
  });
  it('retorna a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    expect(actual).toBeGreaterThanOrEqual(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    expect(actual).not.toContain('Monday');
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });
});
