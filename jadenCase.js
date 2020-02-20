// Not Jaden - Cased: "How can mirrors be real if our eyes aren't real"
// Jaden - Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"

function toJadenCase(str) {
  let arr = str.split(" ");
  let temp = [];
  for (let ele of arr) {
    temp.push(ele.charAt(0).toUpperCase() + ele.slice(1));
  }

  const ans = temp.join(" ");
  return ans;
}

console.log(toJadenCase("ha ha ka ka ma ma"));
