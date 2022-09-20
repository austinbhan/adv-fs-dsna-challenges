const { reverseSentence, titleCase, oddEven, multiples, 
  addPunctuation, addFirst, rootDigit, arrayValue,
  anagram } = require('./index');


describe('primitive code challenges', () => {
  describe('DEMO', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  describe('PRIM01', () => {
    it('each first word capitalized', () => {
      expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
  });
  describe('PRIM02', () => {
    it('Sum of numbers is oddish or evenish', () => {
      expect(oddEven(121)).toBe('Evenish');
    });
  });
  describe('PRIM06', () => {
    it('Should return an array of multiples', () => {
      expect(multiples(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
      expect(multiples(25)).toEqual([25, 50]);
      expect(multiples(75)).toEqual([]);
    });
  });
  describe('HOF01', () => {
    it('should add punctuations', () => {
      expect(addPunctuation('!!!')('hello world')).toEqual('hello world!!!');
    });
  });
  describe('HOF02', () => {
    it('add arrays', () => {
      expect(addFirst('orange')(['red', 'blue', 'green'])).toEqual(['orange', 'red', 'blue', 'green']);
    });
  });
  describe('REC01', () => {
    it('add value, then sum digits of result', () => {
      expect(rootDigit(123)).toEqual(6);
      expect(rootDigit(4322)).toEqual(2);
      expect(rootDigit(999888777)).toEqual(9);
    });
  });
  describe('PRIM03', () => {
    it('should return the position of an array value', () => {
      expect(arrayValue(123456, 4)).toEqual(5);
      expect(arrayValue(1337, 2)).toEqual(3);
      expect(arrayValue(654321, 1)).toEqual(5);
    });
  });
  describe('PRIM04', () => {
    it('should return anagram', () => {
      expect(anagram('superintended', 'unpredestined')).toBe(true);
      expect(anagram('pictorialness', 'documentarily')).toBe(false);
    });
  });
});
