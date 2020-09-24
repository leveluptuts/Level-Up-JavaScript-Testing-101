import { add, total } from './App';

//unit test
//only tests one thing
test('add', () => {
  //assertion
  // const value = add(1,2);
  // expect(value).toBe(3);
  expect(add(1,2)).toBe(3);
  expect(add(5,2)).toBe(7);
})

//Integration test
//testing function based on another function
test('total', () => {
  expect(total(5, 20)).toBe('$25');
})