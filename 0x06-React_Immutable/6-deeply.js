import { Map, List } from 'immutable';

// Function to deeply merge two objects and return an Immutable List of their values
export function mergeDeeplyElements (page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = map1.mergeDeep(map2);
  return List(mergedMap.values());
}

// Example usage (optional, for testing purposes)
const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234
      }
    }
  }
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134
      }
    }
  }
};

console.log(mergeDeeplyElements(page1, page2).toJS());
