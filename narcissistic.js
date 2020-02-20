// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

function narcissistic(value) {
  return (
    String(value)
      .split("")
      .map(function(ele) {
        return Number(ele) ** String(value).length;
      })
      .reduce((a, b) => a + b, 0) === value
  );
}

console.log(narcissistic(1634));
console.log(narcissistic(153));
console.log(narcissistic(433));
