const { reverseSentence, titleCase, oddEven } = require('./index');


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
});
