function findOutlier(integers) {
  let even = [];
  let odd = [];
  integers.forEach(x => {
    if (x % 2 === 0) even.push(x);
    else odd.push(x);
  });
  if (even.length > odd.length) return odd[0];
  else return even[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
