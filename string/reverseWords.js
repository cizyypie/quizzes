function reverseWords(str) {
  let res = [];
  let newStr = str.split(" ");

  for (let i = newStr.length - 1; i >= 0; i--) {
    res.push(newStr[i]);
  }
  return res.join(" ").toString();
}

console.log(reverseWords(""));
