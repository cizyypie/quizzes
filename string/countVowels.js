/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u (but not y).
The input string will only consist of lower case letters and/or spaces.*/

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

function getCount(str) {
let count = 0;
  let vowels = "aiueo";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j< vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count += 1;
      }
    }
  }
  return count;
  }
console.log(getCount("my NAME blabla"))