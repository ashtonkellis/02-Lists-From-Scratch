'use strict';

const List = require('./../src/lib/list');

describe('testing methods of List class', () => {
  let myList;

  beforeEach(() => {
    myList = new List();
    myList.push(0, 1, 2, 3, 4, 5);
  });

  afterEach(() => {
    myList = null;
  });

  test('PUSH: push method adds new items into the array', () => {
    expect(myList).toHaveLength(6);
    myList.push(6);
    expect(myList).toHaveLength(7);
    myList.push();
    expect(myList).toHaveLength(7);
    expect(myList[myList.length - 1]).toEqual(6);
    expect(myList.push(7, 8, 9)).toEqual(10);
    console.log(myList, 'in PUSH');
  });

  test('MAP: throws an error if list is empty', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.map(e => e);
    }).toThrow();
  });

  test('MAP: throws an error if a function is not passed in', () => {
    expect(() => {
      myList.map('non-function');
    }).toThrow();
  });

  test('MAP: returns a new list', () => {
    const newList = myList.map(num => num * 2);

    expect(newList.length).toEqual(myList.length); // eslint-disable-line

    for (let i = 0; i < newList.length; i++) {
      expect(newList[i]).toEqual(myList[i] * 2);
    }
  });

  // TODO: add tests for error checking
  test('REDUCE: shoudl reduce the elements in the list to one single multiplied product with NO accumulator passed in', () => {
    const product = myList.reduce((accumulator, current) => accumulator + current);

    expect(product).toEqual(0);
  });

  test('REDUCE: shoudl reduce the elements in the list to one single value while adding 10 initially', () => {
    const sum = myList.reduce((acc, cur) => acc + cur, 10);

    expect(sum).toEqual(25);
  });
});
