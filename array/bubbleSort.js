function bubbleSort(arr){
    let n = arr.length;
    let swap;

    for(let i=0; i<n; i++){
        swap = false;

        for(let j=0; j<n-1-i; j++){
            if(arr[j]> arr[j-1] ){
                arr[j], arr[j+1] = arr[j+1], arr[j];
                swap = true;
            }
        }
        if(!swap) break;
    }
    return arr;
}


const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", bubbleSort(numbers)); 