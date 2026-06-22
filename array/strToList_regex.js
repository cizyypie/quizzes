function strToList(str) {
  const regex = /[6-9]/g;

  return str.replace(regex, '').split('');
}

// Examples
console.log(strToList("my string"));  // ["m", "y", "s", "t", "r", "i", "n", "g"]
console.log(strToList("2 dollar"));   // ["5", "d", "o", "l", "l", "a", "r"]
console.log(strToList("6 cents"));    // ["c", "e", "n", "t", "s"]