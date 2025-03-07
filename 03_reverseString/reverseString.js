const reverseString = function (word) {
  array = [];
  array.s;
  array = word.split("");
  for (i = 0; i < array.length / 2; i++) {
    // the last elements is equal to length of the array minus 01 mines and minus i
    lastElement = array.length - 1 - i;
    temp = array[i];
    array[i] = array[lastElement];
    array[lastElement] = temp;
    console.log(array[i], array[lastElement]);
  }
  return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
