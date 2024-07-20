import { List, Map } from 'immutable';

// Function to concatenate elements of two arrays into an Immutable List
export function concatElements (page1, page2) {
  return List(page1).concat(List(page2));
}

// Function to merge two objects into an Immutable List
export function mergeElements (page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = map1.merge(map2);
  return List(mergedMap.values());
}

// Example usage (optional, for testing purposes)
console.log(concatElements([1, 2, 3], [4, 5, 6]).toString()); // Should print List [1, 2, 3, 4, 5, 6]
console.log(mergeElements({ a: 1, b: 2 }, { b: 3, c: 4 }).toString()); // Should print List [1, 3, 4]
