export default function accessImmutableObject (object, array) {
  let result = object;
  for (const key of array) {
    if (result[key] === undefined) {
      return undefined;
    }
    result = result[key];
  }
  return result;
}

// Example usage:
const data = {
  name: {
    first: 'Guillaume',
    last: 'Salva'
  }
};

console.log(accessImmutableObject(data, ['name', 'first'])); // Should return "Guillaume"
console.log(accessImmutableObject(data, ['name', 'middle'])); // Should return undefined
console.log(accessImmutableObject(data, ['name', 'last'])); // Should return "Salva"
console.log(accessImmutableObject(data, ['age'])); // Should return undefined
