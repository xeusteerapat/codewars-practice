// Find the divisors!

function divisors(integer) {
  let temp = [];
  for (let i = integer - 1; i > 1; i--) {
    if (integer % i === 0) {
      temp.push(i);
    }
  }
  if (temp.length === 0) {
    return `${integer} is prime`;
  }
  return temp.sort(function(a, b) {
    return a - b;
  });
}
