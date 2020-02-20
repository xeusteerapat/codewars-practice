function solution(str) {
  if (str.length % 2 === 1) {
    str = str + "_";
    return str.match(/.{1,2}/g);
  }
  return str.match(/.{1,2}/g);
}

console.log(solution("abcd"));
