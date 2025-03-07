const removeFromArray = function (array, ...args) {
  hash = new Map();
  for (const n of args) {
    hash.set(n, 0);
  }
  array = array.filter((number) => {
    return hash.get(number) != 0;
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
