import { Map } from 'immutable';

// Create the initial map
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create the second map by modifying values in the first map
export const map2 = map
  .set(2, 'Benjamin')
  .set(4, 'Oliver');

// Example usage (optional, for testing purposes)
console.log(map.toString()); // Should print Map { "1": "Liam", "2": "Noah", "3": "Elijah", "4": "Oliver", "5": "Jacob", "6": "Lucas" }
console.log(map2.toString()); // Should print Map { "1": "Liam", "2": "Benjamin", "3": "Elijah", "4": "Oliver", "5": "Jacob", "6": "Lucas" }

