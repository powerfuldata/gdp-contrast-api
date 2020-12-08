// import sum from './sum';
var sum1 = require('./sum')
test('sum:',() => {
  expect(sum1(1,2)).toBe(4)
})