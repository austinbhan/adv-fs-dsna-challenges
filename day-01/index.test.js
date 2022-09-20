const { reverseSentence, titleCase, oddEven, multiples } = require('./index');


describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  describe('titleCase', () => {
    it('each first word capitalized', () => {
      expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
  });
  describe('oddEven', () => {
    it('Sum of numbers is oddish or evenish', () => {
      console.log(oddEven(12345));
      expect(oddEven(121)).toBe('Evenish');
    });
  });
  describe('multiples', () => {
    it('Should return an array of multiples', () => {
      expect(multiples(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
      expect(multiples(25)).toEqual([25, 50]);
      expect(multiples(75)).toEqual([]);
    });
  });
});
