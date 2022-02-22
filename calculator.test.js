const Calculator = require('./calculator');

describe ('Tests for add method:', () => {
  it('2+2 should be 4', ()=> {
    expect(Calculator.add(2, 2)).toBe(4);
  });
  it('2+(-2) should be 0', ()=> {
    expect(Calculator.add(2, -2)).toBe(0);
  });
  it('856+510 should be 1366', ()=> {
    expect(Calculator.add(856, 510)).toBe(1366);
  });
});

describe ('Tests for subtract method:', () => {
  it('4-2 should be 2', ()=> {
    expect(Calculator.subtract(4, 2)).toBe(2);
  });
  it('6-(-4) should be 10', ()=> {
    expect(Calculator.subtract(6, -4)).toBe(10);
  });
  it('210-0 should be 210', ()=> {
    expect(Calculator.subtract(210, 0)).toBe(210);
  });
});

describe ('Tests for divide method:', () => {
  it('4/2 should be 2', ()=> {
    expect(Calculator.divide(4, 2)).toBe(2);
  });
  it('4/(-4) should be -1', ()=> {
    expect(Calculator.divide(4, -4)).toBe(-1);
  });
  it('11/0 should be Infinity', ()=> {
    expect(Calculator.divide(11, 0)).toBe(Infinity);
  });
});

describe ('Tests for multiply method:', () => {
  it('6*3 should be 18', ()=> {
    expect(Calculator.multiply(6, 3)).toBe(18);
  });
  it('-3*(-4) should be 12', ()=> {
    expect(Calculator.multiply(-3, -4)).toBe(12);
  });
  it('0*235 should be 0', ()=> {
    expect(Calculator.multiply(0, 235)).toBe(0);
  });
});
