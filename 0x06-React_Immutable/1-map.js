// 1-map.js
const { Map } = require('immutable');

function getImmutableObject(object) {
  return Map(object);
}

module.exports = getImmutableObject;

// Example usage
const exampleObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableObject = getImmutableObject(exampleObject);
console.log(immutableObject);

