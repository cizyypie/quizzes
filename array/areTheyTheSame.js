// insruction: https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){
 if (array1 === null || array2 === null || array1.length !== array2.length) return false
  
  const res= []
  for(let i=0; i<array1.length; i++){
    if(typeof array1[i] != "number") return false
    res.push(array1[i] ** 2)
}
  for(let i=0; i<array2.length; i++){
    if (typeof array2[i] !== "number") return false

    const index = res.indexOf(array2[i])

    if (index === -1) return false

    res.splice(index, 1)
  }
  return true
}

function runTest(array1, array2, expected) {
  const result = comp(array1, array2)

  console.log("Test for", array1, array2, result)
}

runTest(
  [10000000, 100000000],
  [100000000000000, 10000000000000000],
)

runTest(
  [10000001, 100000000],
  [100000000000000, 10000000000000000],
)

runTest(
  [2, 2, 3],
  [4, 9, 9]
)

runTest(
  [2, 2, 3],
  [4, 4, 9]
)

runTest(
  [4, 4],
  [1, 31],
  false
)

runTest(
  [3, 4],
  [0, 25],
)

runTest(
  null,
  []
)

runTest(
  [3, 9, 8, 2, 10, 4, 8, 10, 2, 3, 7],
  [49, 64, 64, 16, 100, 4, 9, 9, 81, 4, 100]
)

// other solution