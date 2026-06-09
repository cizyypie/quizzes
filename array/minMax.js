function findMinMaxSums(n, arr, k) {
    arr.sort((a, b) => a - b);

    let min = 0;
    let max = 0;
    let count = n - k;

    for (let i = 0; i < count; i++) {
        min += arr[i];
    }

    for (let i = n - count; i < n; i++) {
        max += arr[i];
    }

    return [min, max];
}

console.log(findMinMaxSums(5, [1, 2, 3, 4, 5], 1))