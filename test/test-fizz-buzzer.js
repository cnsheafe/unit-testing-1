// jshint esversion: 6
const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function() {
  it('should return "fizz" for integers divisible by 3, \
  "buzz" for integers divisible by 5 \
  and "fizz-buzz for integers divisible by 3 and 5."',
  function() {
    const normalCases = [
      {num:9, expected: 'fizz'},
      {num:5, expected: 'buzz'},
      {num:15, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input){
      const testString = fizzBuzzer(input.num);
      testString.should.equal(input.expected);
    });
  });

  it('should raise error if args are not numbers', function() {
    const errorCases = ['5', '3', 'not_num'];

    errorCases.forEach(function(input) {
      (function() {
        fizzBuzzer(input);
      }).should.throw(Error);
    });
  });
});
