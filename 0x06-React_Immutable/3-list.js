import { List } from 'immutable';

export function getListObject (array) {
  return List(array);
}

export function addElementToList (list, element) {
  return list.push(element);
}

// Example usage:
const array = [1, 2, 3];
const list = getListObject(array);
console.log(list); // Should return List [1, 2, 3]

const updatedList = addElementToList(list, 4);
console.log(updatedList); // Should return List [1, 2, 3, 4]
