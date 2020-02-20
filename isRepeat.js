function duplicateCount(text) {
  let freq = {};
  for (let i = 0; i < text.length; i++) {
    let character = text.toLowerCase().charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }

  let count = 0;
  for (let i of Object.values(freq)) {
    if (i > 1) {
      count++;
    }
  }
  return count;
}
// console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("abcdefghijabcdeabcdABCABA"));
