const add = require('./index');

describe('add', () => {
  it('should return 0 for empty input', () => {
    expect(add('')).toBe(0);
  });

  it('should return the sum of comma-separated numbers', () => {
    expect(add('1,2,3')).toBe(6);
  });

  it('should return the sum of newline-separated numbers', () => {
    expect(add('1\n2\n3')).toBe(6);
  });

  it('should return the sum of comma and newline-separated numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  it('should support custom delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  it('should throw error when negative numbers are present', () => {
    expect(() => add('1,-2,3,-4')).toThrow('negative numbers not allowed -2,-4');
  });


  it('should support custom delimiter with special character', () => {
    expect(add('//*\n1*2*3')).toBe(6);
  });


  

 
});
