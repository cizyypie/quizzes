function strToList(str) {
  return str.split('').filter(char => {
    if (char === ' ') {
      return false;
    }

    if (char >= '0' && char <= '9') {
      if (parseInt(char) > 5) {
        return false;
      }
    }
    
    return true;
  });
}

// Examples
console.log(strToList("my string"));  // ["m", "y", "s", "t", "r", "i", "n", "g"]
console.log(strToList("2to dollar"));   // ["5", "d", "o", "l", "l", "a", "r"]
console.log(strToList("6 cents"));    // ["c", "e", "n", "t", "s"]