// 0-fromjs.js
const { fromJS } = require('immutable');

function getImmutableObject (object) {
  return fromJS(object);
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
