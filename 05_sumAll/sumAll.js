const sumAll = function (n1, n2) {
  sum = 0;

  if (typeof n1 != "number" || n1 < 0 || n1 != parseInt(n1)) {
    return "ERROR";
  }
  if (typeof n2 != "number" || n2 < 0 || n2 != parseInt(n2)) {
    return "ERROR";
  }
  if (n1 > n2) [n1, n2] = [n2, n1];

  for (let i = n1; i <= n2; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
