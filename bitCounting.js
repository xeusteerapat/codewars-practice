var countBits = function(n) {
  return n
    .toString(2)
    .split("")
    .map(item => parseInt(item, 10))
    .reduce((a, b) => a + b, 0);
};

console.log(countBits(1234));
